import { createAddLinkHtml } from "../components/createAddLinkHtml.js";
// elements for the mobile mockup preview
const nameContainer = document.querySelector(".mobile-name-container");
const emailContainer = document.querySelector(".mobile-email-container");
const mobileImageContainer = document.querySelector(".mobile-image-container");
const addLinkForm = document.getElementById("add-link-form");
const addLinkContainer = document.getElementById("add-link-container");
const addLinkBtn = document.getElementById("add-link-btn");
const submitBtn = document.getElementById("submit-btn");
const platformsMap = {
    github: { color: "#1A1A1A", name: "GitHub" },
    devto: { color: "#333333", name: "dev.to" },
    "frontend-mentor": { color: "#FFF", name: "Frontend Mentor" },
    codewars: { color: "#8A1A50", name: "Codewars" },
    twitter: { color: "#43B7E9", name: "Twitter" },
    freecodecamp: { color: "#302267", name: "freeCodeCamp" },
    linkedin: { color: "#2D68FF", name: "LinkedIn" },
    gitlab: { color: "#EB4925", name: "GitLab" },
    youtube: { color: "#EE3939", name: "YouTube" },
    hashnode: { color: "#0330D1", name: "Hashnode" },
    facebook: { color: "#2442AC", name: "Facebook" },
    "stack-overflow": { color: "#EC7100", name: "Stack Overflow" },
    twitch: { color: "#EE3FC8", name: "Twitch" },
    codepen: { color: "#4e56a4", name: "Codepen" }
};
const urlRegex = /^(?:https?|ftp):\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?$/;
let linkArray = [];
const mobileLinksContainer = document.getElementById("mobile-links-container");
const updateUIWithData = (profile, links) => {
    if (nameContainer && profile.firstName && profile.lastName) {
        nameContainer.innerHTML = `<p>${profile.firstName} ${profile.lastName}</p>`;
        nameContainer.classList.remove("bg-greyLight");
    }
    if (emailContainer && profile.email) {
        emailContainer.innerHTML = `<p>${profile.email}</p>`;
        emailContainer.classList.remove("bg-greyLight");
    }
    if (mobileImageContainer && profile.image) {
        mobileImageContainer.src = profile.image;
        mobileImageContainer.classList.remove("hidden");
    }
    if (mobileLinksContainer && links) {
        mobileLinksContainer.innerHTML = links
            .map((link, index) => {
            return `
        <div id="button-${index}" style="background-color: ${platformsMap[link.platform].color}" class="cursor-pointer w-60 px-4 h-11 rounded-md flex justify-between items-center">
          <div class="flex gap-2 items-center">
            <img class="colored-icon" src="./images/icon-${link.platform}.svg"/>
            <span class="capitalize text-bm text-white">${platformsMap[link.platform].name}</span>
          </div>
          <img class="colored-icon" src="./images/icon-arrow-right.svg" />
        </div>`;
        })
            .join("");
        if (links.length < 5) {
            for (let i = 0; i < 5 - links.length; i += 1) {
                mobileLinksContainer.innerHTML += `<div class="w-60 h-11 bg-greyLight rounded-md"></div>`;
            }
        }
    }
};
// if there is a stored profile in localstorage the form and mockup are populated accordingly
const storedProfile = localStorage.getItem("profile");
if (storedProfile) {
    updateUIWithData(JSON.parse(storedProfile));
}
const handleEvent = () => {
    // Disabling submit btn if no links are added
    submitBtn.disabled = !(linkArray.length > 0);
    // Creating add link select and input for each of the objects in the array
    if (addLinkContainer != null) {
        addLinkContainer.innerHTML = linkArray
            .map((_, index) => createAddLinkHtml(index))
            .join("");
    }
    linkArray.forEach((link, i) => {
        // Container to display the currently selected platform
        const currentSelected = document.getElementById(`current-selected-${i}`);
        // Container for the list of options for the select
        const selectList = document.getElementById(`select-list-${i}`);
        // Select platform input
        const select = document.getElementById(`select-${i}`);
        // Link url input
        const linkInput = document.getElementById(`link-${i}`);
        // Invalid warning
        const invalidLinkInput = document.getElementById(`invalid-link-${i}`);
        // Remove btn
        const removeBtn = document.getElementById(`remove-${i}`);
        const invalidPlatformInput = document.getElementById(`invalid-platform-${i}`);
        // A function to handle when a platform is choosen
        const setPlatform = (platformId) => {
            if (currentSelected) {
                // Updating the container displaying choosen platform
                currentSelected.innerHTML = ` <img src="./images/icon-${platformId}.svg" alt="${platformId} logo" />
                                        <span class="capitalize">${platformId}</span>`;
            }
            invalidPlatformInput === null || invalidPlatformInput === void 0 ? void 0 : invalidPlatformInput.classList.add("hidden");
            // Updating the link object in the link array
            const storedLinkObject = linkArray[i];
            storedLinkObject.platform = platformId;
        };
        // Adding event listener to url input to and update the corresponding object in array on input
        linkInput === null || linkInput === void 0 ? void 0 : linkInput.addEventListener("input", (e) => {
            if ((e === null || e === void 0 ? void 0 : e.target) instanceof HTMLInputElement) {
                link.url = e.target.value;
                const isValidUrl = urlRegex.test(e.target.value);
                if (!isValidUrl) {
                    invalidLinkInput === null || invalidLinkInput === void 0 ? void 0 : invalidLinkInput.classList.remove("hidden");
                }
                else {
                    invalidLinkInput === null || invalidLinkInput === void 0 ? void 0 : invalidLinkInput.classList.add("hidden");
                }
            }
        });
        // Update url input if there is any value stored in the corresponding object in the array
        if (link.url.length > 0) {
            if (currentSelected) {
                linkInput.value = link.url;
            }
        }
        // Update selected platform if there is any platform stored in the corresponding object in the array
        if (link.platform.length > 0) {
            if (currentSelected) {
                currentSelected.innerHTML = ` <img src="./images/icon-${link.platform}.svg" alt="${link.platform} logo" />
            <span class="capitalize">${link.platform}</span>`;
            }
        }
        // Listen for clicks outside of the select in order to hide the select items list
        document.addEventListener("click", (e) => {
            const { target } = e;
            if (!(selectList === null || selectList === void 0 ? void 0 : selectList.contains(target)) &&
                !(select === null || select === void 0 ? void 0 : select.contains(target))) {
                selectList === null || selectList === void 0 ? void 0 : selectList.classList.add("hidden");
            }
            const newTarget = e.target.closest(`#select-list-${i} li`);
            if (newTarget) {
                const platformId = newTarget.id;
                setPlatform(platformId);
            }
        });
        // Listen for clicks on the select in order to show/hide the select items list
        select === null || select === void 0 ? void 0 : select.addEventListener("click", () => {
            selectList === null || selectList === void 0 ? void 0 : selectList.classList.toggle("hidden");
        });
        removeBtn === null || removeBtn === void 0 ? void 0 : removeBtn.addEventListener("click", () => {
            linkArray = linkArray.filter((_, index) => index !== i);
            if (storedProfile) {
                updateUIWithData(JSON.parse(storedProfile), linkArray);
            }
            handleEvent();
        });
    });
};
addLinkBtn === null || addLinkBtn === void 0 ? void 0 : addLinkBtn.addEventListener("click", () => {
    // Adding a link object when button is clicked
    linkArray.push({
        platform: "",
        url: ""
    });
    handleEvent();
});
addLinkForm === null || addLinkForm === void 0 ? void 0 : addLinkForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;
    linkArray.forEach((link, i) => {
        const invalidPlatformInput = document.getElementById(`invalid-platform-${i}`);
        const invalidLinkInput = document.getElementById(`invalid-link-${i}`);
        if (!(link.platform.length > 0)) {
            invalidPlatformInput === null || invalidPlatformInput === void 0 ? void 0 : invalidPlatformInput.classList.remove("hidden");
            isValid = false;
        }
        const isValidUrl = urlRegex.test(link.url);
        if (!(link.url.length > 0 && isValidUrl)) {
            invalidLinkInput === null || invalidLinkInput === void 0 ? void 0 : invalidLinkInput.classList.remove("hidden");
            isValid = false;
        }
    });
    if (!isValid)
        return;
    if (storedProfile) {
        updateUIWithData(JSON.parse(storedProfile), linkArray);
    }
    linkArray.forEach((link, index) => {
        const button = document.getElementById(`button-${index}`);
        button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
            navigator.clipboard.writeText(link.url);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyIsInNvdXJjZXMiOlsicGFnZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdkUseUNBQXlDO0FBQ3pDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN2RSxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDekUsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUNqRCx5QkFBeUIsQ0FDTixDQUFDO0FBQ3RCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0QsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdkUsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMzRCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBc0IsQ0FBQztBQVk3RSxNQUFNLFlBQVksR0FBNkI7SUFDN0MsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQzVDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUMzQyxpQkFBaUIsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO0lBQzdELFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtJQUNoRCxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7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
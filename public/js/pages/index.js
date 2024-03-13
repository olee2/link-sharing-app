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
            if (link.platform) {
                return `
        <div id="button-${index}" style="background-color: ${platformsMap[link.platform].color}" class="cursor-pointer w-60 px-4 h-11 rounded-md flex justify-between items-center">
          <div class="flex gap-2 items-center">
            <img class="colored-icon" src="./images/icon-${link.platform}.svg"/>
            <span class="capitalize text-bm text-white">${platformsMap[link.platform].name}</span>
          </div>
          <img class="colored-icon" src="./images/icon-arrow-right.svg" />
        </div>`;
            }
            return "";
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
        // Drag icon btn
        const dragBtn = document.getElementById(`drag-icon-${i}`);
        const invalidPlatformInput = document.getElementById(`invalid-platform-${i}`);
        const dragContainer = document.getElementById(`drag-container-${i}`);
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
        // Add event listeners to the input field
        dragBtn === null || dragBtn === void 0 ? void 0 : dragBtn.addEventListener("mousedown", () => {
            if (!dragContainer)
                return;
            dragContainer.draggable = true;
            dragContainer === null || dragContainer === void 0 ? void 0 : dragContainer.addEventListener("dragstart", (event) => {
                var _a;
                (_a = event === null || event === void 0 ? void 0 : event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text/plain", String(i));
            });
            dragContainer === null || dragContainer === void 0 ? void 0 : dragContainer.addEventListener("dragend", () => {
                dragContainer.draggable = false;
            });
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
        addLinkContainer === null || addLinkContainer === void 0 ? void 0 : addLinkContainer.addEventListener("dragover", (event) => {
            event.preventDefault(); // Prevent default behavior
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
addLinkContainer === null || addLinkContainer === void 0 ? void 0 : addLinkContainer.addEventListener("drop", (event) => {
    event.preventDefault(); // Prevent default behavior
    const target = event.target; // Cast event.target to HTMLElement
    const parentNode = target.parentNode; // Cast parentNode to HTMLElement or null
    if (parentNode && event.dataTransfer) {
        const fromIndex = parseInt(event.dataTransfer.getData("text/plain"), 10);
        const toIndex = Array.from(parentNode.children).indexOf(target);
        // Rearrange the array
        const element = linkArray.splice(fromIndex, 1)[0];
        linkArray.splice(toIndex, 0, element);
        // Re-render the elements
        handleEvent();
    }
});
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
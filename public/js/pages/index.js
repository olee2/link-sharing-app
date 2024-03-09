import { createAddLinkHtml } from "../components/createAddLinkHtml.js";
// elements for the mobile mockup preview
const nameContainer = document.querySelector(".mobile-name-container");
const emailContainer = document.querySelector(".mobile-email-container");
const mobileImageContainer = document.querySelector(".mobile-image-container");
const addLinkContainer = document.getElementById("add-link-container");
const addLinkBtn = document.getElementById("add-link-btn");
let linkArray = [];
const handleEvent = () => {
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
        // A function to handle when a platform is choosen
        const setPlatform = (platformId) => {
            if (currentSelected) {
                // Updating the container displaying choosen platform
                currentSelected.innerHTML = ` <img src="./images/icon-${platformId}.svg" alt="${platformId} logo" />
                                        <span class="capitalize">${platformId}</span>`;
            }
            // Updating the link object in the link array
            const storedLinkObject = linkArray[i];
            storedLinkObject.platform = platformId;
        };
        // Adding event listener to url input to and update the corresponding object in array on input
        linkInput === null || linkInput === void 0 ? void 0 : linkInput.addEventListener("input", (e) => {
            if ((e === null || e === void 0 ? void 0 : e.target) instanceof HTMLInputElement) {
                link.url = e.target.value;
                if (!e.target.checkValidity()) {
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
const updateUIWithData = (profile) => {
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
};
// if there is a stored profile in localstorage the form and mockup are populated accordingly
const storedProfile = localStorage.getItem("profile");
if (storedProfile) {
    updateUIWithData(JSON.parse(storedProfile));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyIsInNvdXJjZXMiOlsicGFnZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdkUseUNBQXlDO0FBQ3pDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN2RSxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDekUsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUNqRCx5QkFBeUIsQ0FDTixDQUFDO0FBQ3RCLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3ZFLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7QUFPM0QsSUFBSSxTQUFTLEdBQVcsRUFBRSxDQUFDO0FBRTNCLE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtJQUN2QiwwRUFBMEU7SUFDMUUsSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM3QixnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsU0FBUzthQUNuQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1Qix1REFBdUQ7UUFDdkQsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RSxtREFBbUQ7UUFDbkQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFD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
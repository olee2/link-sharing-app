import { createAddLinkHtml } from "../components/createAddLinkHtml.js";
// elements for the mobile mockup preview
const nameContainer = document.querySelector(".mobile-name-container");
const emailContainer = document.querySelector(".mobile-email-container");
const mobileImageContainer = document.querySelector(".mobile-image-container");
const addLinkForm = document.getElementById("add-link-form");
const addLinkBtn = document.getElementById("add-link-btn");
let linkArray = [];
const handleEvent = () => {
    // Creating add link select and input for each of the objects in the array
    if (addLinkForm != null) {
        addLinkForm.innerHTML = linkArray
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyIsInNvdXJjZXMiOlsicGFnZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdkUseUNBQXlDO0FBQ3pDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN2RSxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDekUsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUNqRCx5QkFBeUIsQ0FDTixDQUFDO0FBQ3RCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0QsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQU8zRCxJQUFJLFNBQVMsR0FBVyxFQUFFLENBQUM7QUFFM0IsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFO0lBQ3ZCLDBFQUEwRTtJQUMxRSxJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixXQUFXLENBQUMsU0FBUyxHQUFHLFNBQVM7YUFDOUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUIsdURBQXVEO1FBQ3ZELE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekUsbURBQW1EO1FBQ25ELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENB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
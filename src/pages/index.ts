import { Profile } from "./profile.js";
import { createAddLinkHtml } from "../components/createAddLinkHtml.js";

// elements for the mobile mockup preview
const nameContainer = document.querySelector(".mobile-name-container");
const emailContainer = document.querySelector(".mobile-email-container");
const mobileImageContainer = document.querySelector(
  ".mobile-image-container"
) as HTMLImageElement;
const addLinkContainer = document.getElementById("add-link-container");
const addLinkBtn = document.getElementById("add-link-btn");

interface Link {
  platform: string;
  url: string;
}

let linkArray: Link[] = [];

addLinkBtn?.addEventListener("click", () => {
  // Adding a link object when button is clicked
  linkArray.push({
    platform: "",
    url: ""
  });

  // Creating add link select and input for each of the objects in the array
  if (addLinkContainer != null) {
    addLinkContainer.innerHTML = linkArray
      .map((_, index) => createAddLinkHtml(index))
      .join("");
  }

  // Adding event listeners to the html that is generated based on the objects in the array
  for (let i = 0; i <= linkArray.length; i += 1) {
    // Container to display the currently selected platform
    const currentSelected = document.getElementById(`current-selected-${i}`);
    // Container for the list of options for the select
    const selectList = document.getElementById(`select-list-${i}`);
    // Select platform input
    const select = document.getElementById(`select-${i}`);
    // Link url input
    const linkInput = document.getElementById(`link-${i}`) as HTMLInputElement;
    // Invalid warning
    const invalidLinkInput = document.getElementById(`invalid-link-${i}`);
    // Remove btn
    const removeBtn = document.getElementById(`remove-${i}`);

    removeBtn?.addEventListener("click", () => {});

    // Adding event listener to url input to and update the corresponding object in array on input
    linkInput?.addEventListener("input", (e) => {
      if (e?.target instanceof HTMLInputElement) {
        linkArray[i].url = e.target.value;
        console.log(e.target.checkValidity());
        if (!e.target.checkValidity()) {
          invalidLinkInput?.classList.remove("hidden");
        } else {
          invalidLinkInput?.classList.add("hidden");
        }
      }
    });

    //Update url input if there is any value stored in the corresponding object in the array
    if (
      linkArray &&
      linkArray.length &&
      linkArray[i] &&
      linkArray[i].url &&
      linkArray[i].url.length !== 0
    ) {
      if (currentSelected) {
        linkInput.value = linkArray[i].url;
      }
    }

    //Update selected platform if there is any platform stored in the corresponding object in the array
    if (linkArray[i].platform.length !== 0) {
      if (currentSelected) {
        currentSelected.innerHTML = ` <img src="./images/icon-${linkArray[i].platform}.svg" alt="${linkArray[i].platform} logo" />
                                      <span class="capitalize">${linkArray[i].platform}</span>`;
      }
    }

    // A function to handle when a platform is choosen
    const setPlatform = (platformId: string) => {
      if (currentSelected) {
        // Updating the container displaying choosen platform
        currentSelected.innerHTML = ` <img src="./images/icon-${platformId}.svg" alt="${platformId} logo" />
                                      <span class="capitalize">${platformId}</span>`;
      }
      // Updating the link object in the link array
      const storedLinkObject = linkArray[i];
      storedLinkObject.platform = platformId;
    };

    // Listen for clicks outside of the select in order to hide the select items list
    document.addEventListener("click", (e) => {
      const { target } = e;
      if (
        !selectList?.contains(target as Node) &&
        !select?.contains(target as Node)
      ) {
        selectList?.classList.add("hidden");
      }

      const newTarget = (e.target as Element).closest(`#select-list-${i} li`);
      if (newTarget) {
        const platformId = newTarget.id;
        setPlatform(platformId);
      }
    });

    // Listen for clicks on the select in order to show/hide the select items list
    select?.addEventListener("click", () => {
      selectList?.classList.toggle("hidden");
    });
  }
});

const updateUIWithData = (profile: Profile) => {
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

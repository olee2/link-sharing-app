import { Profile } from "./profile.js";
import { createAddLinkHtml } from "../components/createAddLinkHtml.js";

// elements for the mobile mockup preview
const nameContainer = document.querySelector(".mobile-name-container");
const emailContainer = document.querySelector(".mobile-email-container");
const mobileImageContainer = document.querySelector(
  ".mobile-image-container"
) as HTMLImageElement;
const addLinkForm = document.getElementById("add-link-form");
const addLinkContainer = document.getElementById("add-link-container");
const addLinkBtn = document.getElementById("add-link-btn");
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;

interface Link {
  platform: string;
  url: string;
}

interface Platform {
  color: string;
  name: string;
}

const platformsMap: Record<string, Platform> = {
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

const urlRegex =
  /^(?:https?|ftp):\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?$/;

let linkArray: Link[] = [];

const mobileLinksContainer = document.getElementById("mobile-links-container");

const updateUIWithData = (profile: Profile, links?: Link[]) => {
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
    const linkInput = document.getElementById(`link-${i}`) as HTMLInputElement;
    // Invalid warning
    const invalidLinkInput = document.getElementById(`invalid-link-${i}`);
    // Remove btn
    const removeBtn = document.getElementById(`remove-${i}`);

    const invalidPlatformInput = document.getElementById(
      `invalid-platform-${i}`
    );

    // A function to handle when a platform is choosen
    const setPlatform = (platformId: string) => {
      if (currentSelected) {
        // Updating the container displaying choosen platform
        currentSelected.innerHTML = ` <img src="./images/icon-${platformId}.svg" alt="${platformId} logo" />
                                        <span class="capitalize">${platformId}</span>`;
      }
      invalidPlatformInput?.classList.add("hidden");
      // Updating the link object in the link array
      const storedLinkObject = linkArray[i];
      storedLinkObject.platform = platformId;
    };

    // Adding event listener to url input to and update the corresponding object in array on input
    linkInput?.addEventListener("input", (e) => {
      if (e?.target instanceof HTMLInputElement) {
        link.url = e.target.value;
        const isValidUrl = urlRegex.test(e.target.value);
        if (!isValidUrl) {
          invalidLinkInput?.classList.remove("hidden");
        } else {
          invalidLinkInput?.classList.add("hidden");
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

    removeBtn?.addEventListener("click", () => {
      linkArray = linkArray.filter((_, index) => index !== i);
      if (storedProfile) {
        updateUIWithData(JSON.parse(storedProfile), linkArray);
      }
      handleEvent();
    });
  });
};

addLinkBtn?.addEventListener("click", () => {
  // Adding a link object when button is clicked
  linkArray.push({
    platform: "",
    url: ""
  });

  handleEvent();
});

addLinkForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  linkArray.forEach((link, i) => {
    const invalidPlatformInput = document.getElementById(
      `invalid-platform-${i}`
    );
    const invalidLinkInput = document.getElementById(`invalid-link-${i}`);

    if (!(link.platform.length > 0)) {
      invalidPlatformInput?.classList.remove("hidden");
      isValid = false;
    }
    const isValidUrl = urlRegex.test(link.url);
    if (!(link.url.length > 0 && isValidUrl)) {
      invalidLinkInput?.classList.remove("hidden");
      isValid = false;
    }
  });

  if (!isValid) return;

  if (storedProfile) {
    updateUIWithData(JSON.parse(storedProfile), linkArray);
  }

  linkArray.forEach((link, index) => {
    const button = document.getElementById(`button-${index}`);
    button?.addEventListener("click", () => {
      navigator.clipboard.writeText(link.url);
    });
  });
});

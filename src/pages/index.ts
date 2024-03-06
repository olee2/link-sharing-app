import { Profile } from "./profile.js";

// elements for the mobile mockup preview
const nameContainer = document.querySelector(".mobile-name-container");
const emailContainer = document.querySelector(".mobile-email-container");
const mobileImageContainer = document.querySelector(
  ".mobile-image-container"
) as HTMLImageElement;
const addLinkContainer = document.getElementById("add-link-container");
const addLinkBtn = document.getElementById("add-link-btn");

const platforms = [
  "codepen",
  "codewars",
  "devto",
  "facebook",
  "freecodecamp",
  "frontend-mentor",
  "github",
  "gitlab",
  "hashnode",
  "linkedin",
  "stack-overflow",
  "twitch",
  "twitter",
  "youtube"
];

let addLinkCount = 0;
const addLinkHtmlArray: string[] = [];

addLinkBtn?.addEventListener("click", () => {
  addLinkCount += 1;

  addLinkHtmlArray.push(`
      <div
      class="flex justify-center items-center flex-col bg-greyLight p-5 rounded-md  gap-4"
      >
      <div
        class="flex w-full items-center justify-between font-bold text-bm text-grey"
      >
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="6"
            fill="none"
            viewBox="0 0 12 6"
            class="label-svg"
          >
            <path fill="#737373" d="M0 0h12v1H0zM0 5h12v1H0z" />
          </svg>
          <p>Link #${addLinkCount}</p>
        </div>
        <p class="font-normal">Remove</p>
      </div>
      
      <div class="flex flex-col w-full gap-5">
        <div>
          <label
            class="block mb-1 text-bs text-grey font-semibold self-start"
            >Platform</label
          >
          <div
            id="select-${addLinkCount}"
            class="w-full relative border border-borders bg-white rounded-md h-10 flex items-center justify-between px-3 py-6"
          > <span id="current-selected-${addLinkCount}" class="flex gap-3">Choose Platform</span>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="9"
          fill="none"
          viewBox="0 0 14 9"
          >
            <path stroke="#633CFF" stroke-width="2" d="m1 1 6 6 6-6" />
          </svg>
          <div
          id="select-list-${addLinkCount}"
          class="w-full overflow-y-scroll max-h-60 bg-white border absolute top-12 border-borders right-0 p-0 hidden"
          >
            <ul class="flex flex-col p-0">
            ${platforms
              .map((platform) => {
                return `<li
                id="${platform}"
                class="flex gap-2 p-2 hover:bg-greyLight cursor-default"
            >
              <img src="./images/icon-${platform}.svg" alt="${platform} logo" />
              <span class="capitalize">${platform}</span>
            </li>`;
              })
              .join("")}
              
            </ul>
          </div></div>
        </div>
      
        <div class="flex flex-col w-full">
          <label
            class="block mb-1 text-bs text-grey font-semibold self-start"
            >Link</label
          >
          <div class="bg-white">
            <input
           
              class="block w-full border-borders rounded-md p-3 pl-10 placeholder:text-greyDark placeholder:text-opacity-50 focus:ring-0 focus:shadow-activeSelection focus:ring-inset focus:ring-purple link-input"
              type="url"
              id="first-name"
              placeholder="e.g. https://www.github.com/johnappleseed"
            />
          </div>
        </div>
      </div>
      </div>
      `);

  if (addLinkContainer != null) {
    if (addLinkCount === 1) {
      addLinkContainer.innerHTML =
        addLinkHtmlArray[addLinkHtmlArray.length - 1];
    } else {
      addLinkContainer.innerHTML +=
        addLinkHtmlArray[addLinkHtmlArray.length - 1];
    }
  }
  for (let i = 1; i <= addLinkCount; i += 1) {
    const currentSelected = document.getElementById(`current-selected-${i}`);
    const select = document.getElementById(`select-${i}`);
    const setPlatform = (platformId: string) => {
      if (currentSelected) {
        currentSelected.innerHTML = ` <img src="./images/icon-${platformId}.svg" alt="${platformId} logo" />
                                      <span class="capitalize">${platformId}</span>`;
      }
    };
    const selectList = document.getElementById(`select-list-${i}`);

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

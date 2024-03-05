import { Profile } from "./profile.js";

// elements for the mobile mockup preview
const nameContainer = document.querySelector(".mobile-name-container");
const emailContainer = document.querySelector(".mobile-email-container");
const mobileImageContainer = document.querySelector(
  ".mobile-image-container"
) as HTMLImageElement;

const select = document.getElementById("select");

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

const selectHtml = `
                  <span id="current-selected" class="flex gap-2">Choose Platform</span>
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
                      id="select-list"
                      class="w-full overflow-scroll max-h-60 bg-white border absolute top-9 border-borders right-0 p-0 hidden"
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
                      </div>`;

if (select != null) {
  select.innerHTML += selectHtml;
}
const currentSelected = document.getElementById("current-selected");

const setPlatform = (platformId: string) => {
  if (currentSelected) {
    currentSelected.innerHTML = ` <img src="./images/icon-${platformId}.svg" alt="${platformId} logo" />
                                  <span class="capitalize">${platformId}</span>`;
  }
};

const selectList = document.getElementById("select-list");

// Listen for clicks outside of the select in order to hide the select items list
document.addEventListener("click", (e) => {
  const { target } = e;
  if (
    !selectList?.contains(target as Node) &&
    !select?.contains(target as Node)
  ) {
    selectList?.classList.add("hidden");
  }

  const newTarget = (e.target as Element).closest("#select-list li");
  if (newTarget) {
    const platformId = newTarget.id;
    setPlatform(platformId);
  }
});

// Listen for clicks on the select in order to show/hide the select items list
select?.addEventListener("click", () => {
  selectList?.classList.toggle("hidden");
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

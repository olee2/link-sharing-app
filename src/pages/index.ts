import { Profile } from "./profile.js";

// elements for the mobile mockup preview
const nameContainer = document.querySelector(".mobile-name-container");
const emailContainer = document.querySelector(".mobile-email-container");
const mobileImageContainer = document.querySelector(
  ".mobile-image-container"
) as HTMLImageElement;

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

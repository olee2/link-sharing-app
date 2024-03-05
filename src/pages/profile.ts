import { validateImage } from "../utils";

// elements involved in uploading and previewing the profile image
const imageInput = document.getElementById(
  "profile-image-input"
) as HTMLInputElement;
const imageContainer = document.getElementById("profile-image-container");
const imagePreview = document.getElementById(
  "profile-image-preview"
) as HTMLImageElement;
const overlayContainer = document.getElementById("overlay");
const imageLabelText = document.getElementById("image-label-text");

// elements for the rest of the profile form
const form = document.getElementById("profile-form") as HTMLFormElement;
const firstName = document.getElementById("first-name") as HTMLInputElement;
const lastName = document.getElementById("last-name") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const submitBtn = document.getElementById(
  "form-submit-btn"
) as HTMLButtonElement;

// elements for the mobile mockup preview
const nameContainer = document.querySelector(".mobile-name-container");
const emailContainer = document.querySelector(".mobile-email-container");
const mobileImageContainer = document.querySelector(
  ".mobile-image-container"
) as HTMLImageElement;

export interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

/**
 * This function updates the UI with the profile data.
 * It also updates labels accordingly and removes any placeholder from containers.
 *
 * @param {Profile} profile - The profile data to be displayed.
 */
const updateUIWithData = (profile: Profile) => {
  if (
    nameContainer &&
    profile.firstName &&
    profile.lastName &&
    firstName &&
    lastName
  ) {
    nameContainer.innerHTML = `<p>${profile.firstName} ${profile.lastName}</p>`;
    firstName.value = profile.firstName;
    lastName.value = profile.lastName;
    nameContainer.classList.remove("bg-greyLight");
  }

  if (emailContainer && profile.email && email) {
    emailContainer.innerHTML = `<p>${profile.email}</p>`;
    email.value = profile.email;
    emailContainer.classList.remove("bg-greyLight");
  }

  if (mobileImageContainer && profile.image) {
    mobileImageContainer.src = profile.image;
    mobileImageContainer.classList.remove("hidden");
    imagePreview.classList.remove("hidden");
    imagePreview.src = profile.image;
    if (imageLabelText) {
      imageLabelText.innerText = "Change Image";
    }
    imageContainer?.classList.remove("text-purple");
    imageContainer?.classList.add("text-white");
    overlayContainer?.classList.remove("hidden");
  }
};

// if there is a stored profile in localstorage the form and mockup are populated accordingly
const storedProfile = localStorage.getItem("profile");

if (storedProfile) {
  updateUIWithData(JSON.parse(storedProfile));
}

// handling the uploading of a profile image
imageInput?.addEventListener("input", () => {
  if (!imageInput.files) return;
  const file = imageInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const imageData = event?.target?.result;

      // Check if the file is a valid image
      const isImageValid = await validateImage(file);

      if (isImageValid) {
        // temp storage of the image in localstorage
        localStorage.setItem("tempProfileImage", JSON.stringify(imageData));

        // adding and displaying the image preview
        if (imagePreview) {
          imagePreview.classList.remove("hidden");
          imagePreview.src = imageData as string;
          console.log(imagePreview);
          if (imageLabelText) {
            imageLabelText.innerText = "Change Image";
          }
          imageContainer?.classList.remove("text-purple");
          imageContainer?.classList.add("text-white");
          overlayContainer?.classList.remove("hidden");
        }
      } else {
        // Notify the user about invalid image
      }
    };
    reader.readAsDataURL(file);
  }
});

// verifying if the form is valid and submit btn should be enabled or disabled
form.addEventListener("input", () => {
  if (form.checkValidity()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

// on submit the profile is cached in local storage and the page is populated with the data
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const tempImage = localStorage.getItem("tempProfileImage");

  const profile = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value || "",
    image: tempImage
      ? JSON.parse(tempImage)
      : storedProfile
        ? JSON.parse(storedProfile).image
        : ""
  };

  localStorage.setItem("profile", JSON.stringify(profile));

  // removing the temp image after image is stored with complete profile
  localStorage.removeItem("tempProfileImage");

  updateUIWithData(profile);
});

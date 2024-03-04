var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { validateImage } from "../utils/validateImage.js";
// elements involved in uploading and previewing the profile image
const imageInput = document.getElementById("profile-image-input");
const imageContainer = document.getElementById("profile-image-container");
const imagePreview = document.getElementById("profile-image-preview");
const overlayContainer = document.getElementById("overlay");
const imageLabelText = document.getElementById("image-label-text");
// elements for the rest of the profile form
const form = document.getElementById("profile-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const submitBtn = document.getElementById("form-submit-btn");
// elements for the mobile mockup preview
const nameContainer = document.querySelector(".mobile-name-container");
const emailContainer = document.querySelector(".mobile-email-container");
const mobileImageContainer = document.querySelector(".mobile-image-container");
/**
 * This function updates the UI with the profile data.
 * It also updates labels accordingly and removes any placeholder from containers.
 *
 * @param {Profile} profile - The profile data to be displayed.
 */
const updateUIWithData = (profile) => {
    if (nameContainer &&
        profile.firstName &&
        profile.lastName &&
        firstName &&
        lastName) {
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
        imageContainer === null || imageContainer === void 0 ? void 0 : imageContainer.classList.remove("text-purple");
        imageContainer === null || imageContainer === void 0 ? void 0 : imageContainer.classList.add("text-white");
        overlayContainer === null || overlayContainer === void 0 ? void 0 : overlayContainer.classList.remove("hidden");
    }
};
// if there is a stored profile in localstorage the form and mockup are populated accordingly
const storedProfile = localStorage.getItem("profile");
if (storedProfile) {
    updateUIWithData(JSON.parse(storedProfile));
}
// handling the uploading of a profile image
imageInput === null || imageInput === void 0 ? void 0 : imageInput.addEventListener("input", () => {
    if (!imageInput.files)
        return;
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const imageData = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.result;
            // Check if the file is a valid image
            const isImageValid = yield validateImage(file);
            if (isImageValid) {
                // temp storage of the image in localstorage
                localStorage.setItem("tempProfileImage", JSON.stringify(imageData));
                // adding and displaying the image preview
                if (imagePreview) {
                    imagePreview.classList.remove("hidden");
                    imagePreview.src = imageData;
                    console.log(imagePreview);
                    if (imageLabelText) {
                        imageLabelText.innerText = "Change Image";
                    }
                    imageContainer === null || imageContainer === void 0 ? void 0 : imageContainer.classList.remove("text-purple");
                    imageContainer === null || imageContainer === void 0 ? void 0 : imageContainer.classList.add("text-white");
                    overlayContainer === null || overlayContainer === void 0 ? void 0 : overlayContainer.classList.remove("hidden");
                }
            }
            else {
                // Notify the user about invalid image
            }
        });
        reader.readAsDataURL(file);
    }
});
// verifying if the form is valid and submit btn should be enabled or disabled
form.addEventListener("input", () => {
    if (form.checkValidity()) {
        submitBtn.disabled = false;
    }
    else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIiwic291cmNlcyI6WyJwYWdlcy9wcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxrRUFBa0U7QUFDbEUsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDeEMscUJBQXFCLENBQ0YsQ0FBQztBQUN0QixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDMUUsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDMUMsdUJBQXVCLENBQ0osQ0FBQztBQUN0QixNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUQsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRW5FLDRDQUE0QztBQUM1QyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBb0IsQ0FBQztBQUN4RSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBcUIsQ0FBQztBQUM1RSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBcUIsQ0FBQztBQUMxRSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBcUIsQ0FBQztBQUNuRSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUN2QyxpQkFBaUIsQ0FDRyxDQUFDO0FBRXZCLHlDQUF5QztBQUN6QyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDdkUsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3pF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
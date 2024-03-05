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
import { handleToast } from "../utils/handleToast.js";
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
const toastContainer = document.getElementById("toast-container");
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
            try {
                const isImageValid = yield validateImage(file);
                if (isImageValid) {
                    // temp storage of the image in localstorage
                    localStorage.setItem("tempProfileImage", JSON.stringify(imageData));
                    // adding and displaying the image preview
                    if (imagePreview) {
                        imagePreview.classList.remove("hidden");
                        imagePreview.src = imageData;
                        if (imageLabelText) {
                            imageLabelText.innerText = "Change Image";
                        }
                        imageContainer === null || imageContainer === void 0 ? void 0 : imageContainer.classList.remove("text-purple");
                        imageContainer === null || imageContainer === void 0 ? void 0 : imageContainer.classList.add("text-white");
                        overlayContainer === null || overlayContainer === void 0 ? void 0 : overlayContainer.classList.remove("hidden");
                    }
                }
            }
            catch (error) {
                if (toastContainer) {
                    toastContainer.innerHTML = `<div class="toast toast-top">
          <div class="alert alert-error">
            <span>${error}</span>
          </div>
         </div>`;
                }
                const toast = document.querySelector(".toast");
                if (toast) {
                    handleToast(toast);
                }
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
    let tempImage = localStorage.getItem("tempProfileImage");
    if (tempImage) {
        tempImage = JSON.parse(tempImage);
    }
    else if (storedProfile) {
        tempImage = JSON.parse(storedProfile).image;
    }
    else {
        tempImage = "";
    }
    const profile = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value || "",
        image: tempImage
    };
    localStorage.setItem("profile", JSON.stringify(profile));
    // removing the temp image after image is stored with complete profile
    localStorage.removeItem("tempProfileImage");
    updateUIWithData(profile);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIiwic291cmNlcyI6WyJwYWdlcy9wcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdEQsa0VBQWtFO0FBQ2xFLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ3hDLHFCQUFxQixDQUNGLENBQUM7QUFDdEIsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQzFFLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQzFDLHVCQUF1QixDQUNKLENBQUM7QUFDdEIsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVELE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVuRSw0Q0FBNEM7QUFDNUMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQW9CLENBQUM7QUFDeEUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQXFCLENBQUM7QUFDNUUsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXFCLENBQUM7QUFDMUUsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXFCLENBQUM7QUFDbkUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDdkMsaUJBQWlCLENBQ0csQ0FBQztBQUV2Qix5Q0FBeUM7QUFDekMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3ZFLE1BQU0sY0FBYyxHQUFH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
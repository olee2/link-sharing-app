var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { validateImage } from "../utils";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIiwic291cmNlcyI6WyJwYWdlcy9wcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFekMsa0VBQWtFO0FBQ2xFLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ3hDLHFCQUFxQixDQUNGLENBQUM7QUFDdEIsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQzFFLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQzFDLHVCQUF1QixDQUNKLENBQUM7QUFDdEIsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVELE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVuRSw0Q0FBNEM7QUFDNUMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQW9CLENBQUM7QUFDeEUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQXFCLENBQUM7QUFDNUUsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXFCLENBQUM7QUFDMUUsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXFCLENBQUM7QUFDbkUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDdkMsaUJBQWlCLENBQ0csQ0FBQztBQUV2Qix5Q0FBeUM7QUFDekMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3ZFLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUN6RSxN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
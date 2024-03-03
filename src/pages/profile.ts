const imageInput = document.getElementById(
  "profile-image-input"
) as HTMLInputElement;

const imageContainer = document.getElementById("profile-image-container");
const imagePreview = document.getElementById(
  "profile-image-preview"
) as HTMLImageElement;
const overlayContainer = document.getElementById("overlay");

const imageLabelText = document.getElementById(
  "image-label-text"
) as HTMLElement;

imageInput?.addEventListener("input", () => {
  if (!imageInput.files) return;
  const file = imageInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageData = event?.target?.result;
      localStorage.setItem("profilePicture", JSON.stringify(imageData));
      console.log(imageData);
      if (imagePreview) {
        imagePreview.classList.remove("hidden");
        imagePreview.src = imageData as string;
        if (imageLabelText) {
          imageLabelText.innerText = "Change Image";
        }
        imageContainer?.classList.remove("text-purple");
        imageContainer?.classList.add("text-white");
        overlayContainer?.classList.remove("hidden");
      }
    };
    reader.readAsDataURL(file);
  }
});

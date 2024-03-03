"use strict";
const imageInput = document.getElementById("profile-image-input");
const imageContainer = document.getElementById("profile-image-container");
const imagePreview = document.getElementById("profile-image-preview");
const overlayContainer = document.getElementById("overlay");
const imageLabelText = document.getElementById("image-label-text");
imageInput === null || imageInput === void 0 ? void 0 : imageInput.addEventListener("input", () => {
    if (!imageInput.files)
        return;
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            const imageData = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.result;
            localStorage.setItem("profilePicture", JSON.stringify(imageData));
            console.log(imageData);
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
        };
        reader.readAsDataURL(file);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIiwic291cmNlcyI6WyJwYWdlcy9wcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUN4QyxxQkFBcUIsQ0FDRixDQUFDO0FBRXRCLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUMxRSxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUMxQyx1QkFBdUIsQ0FDSixDQUFDO0FBQ3RCLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUU1RCxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUM1QyxrQkFBa0IsQ0FDSixDQUFDO0FBRWpCLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztRQUFFLE9BQU87SUFDOUIsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ1QsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsS0FBSzs7WUFDN0IsTUFBTSxTQUFTLEdBQUcsTUFBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSwwQ0FBRSxNQUFNLENBQUM7WUFDeEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixJQUFJLFlBQVksRUFBRSxDQUFDO2dCQUNqQixZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEMsWUFBWSxDQUFDLEdBQUcsR0FBRyxTQUFtQixDQUFDO2dCQUN2QyxJQUFJLGNBQWMsRUFBRSxDQUFDO29CQUNuQixjQUFjLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztnQkFDNUMsQ0FBQztnQkFDRCxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDaEQsY0FBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzVDLGdCQUFnQixhQUFoQixnQkFBZ0IsdUJBQWhCLGdCQUFnQixDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsQ0FBQztRQUNILENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDIn0=
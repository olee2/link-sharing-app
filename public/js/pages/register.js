var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { registerUser } from "../api/registerUser";
import { handleToast } from "../utils";
const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const toastContainer = document.getElementById("toast-container");
// Reset custom validity on input
confirmPassword.addEventListener("input", () => {
    confirmPassword.setCustomValidity("");
});
form.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords does not match");
    }
    else {
        confirmPassword.setCustomValidity("");
    }
    // Force the form to re-check its validation constraints
    form.reportValidity();
    if (!form.checkValidity()) {
        return;
    }
    const body = { email: email.value, password: password.value, active: 1 };
    try {
        const result = yield registerUser(body);
        if (toastContainer) {
            toastContainer.innerHTML = `<div class="toast">
      <div class="alert alert-success">
        <span>${result}</span>
      </div>
     </div>`;
        }
        form.reset();
    }
    catch (error) {
        if (toastContainer) {
            toastContainer.innerHTML = `<div class="toast">
      <div class="alert alert-error">
        <span>${error}</span>
      </div>
     </div>`;
        }
    }
    const toast = document.querySelector(".toast");
    if (toast) {
        handleToast(toast);
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyIsInNvdXJjZXMiOlsicGFnZXMvcmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQW9CLENBQUM7QUFDdEUsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXFCLENBQUM7QUFDbkUsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXFCLENBQUM7QUFDekUsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDN0Msa0JBQWtCLENBQ0MsQ0FBQztBQUN0QixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFbEUsaUNBQWlDO0FBQ2pDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQzdDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4QyxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBTyxDQUFDLEVBQUUsRUFBRTtJQUMxQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFbkIsSUFBSSxRQUFRLENBQUMsS0FBSyxLQUFLLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QyxlQUFlLENBQUMsaUJBQWlCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNoRSxDQUFDO1NBQU0sQ0FBQztRQUNOLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsd0RBQXdEO0lBQ3hELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUM7UUFDMUIsT0FBTztJQUNULENBQUM7SUFFRCxNQUFNLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUV6RSxJQUFJLENBQUM7UUFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQ25CLGNBQWMsQ0FBQyxTQUFTLEdBQUc7O2dCQUVqQixNQUFNOztZQUVWLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDZixJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQ25CLGNBQWMsQ0FBQyxTQUFTLEdBQUc7O2dCQUVqQixLQUFLOztZQUVULENBQUM7UUFDVCxDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFL0MsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNWLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0FBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9
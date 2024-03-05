var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { registerUser } from "../api/registerUser.js";
import { handleToast } from "../utils/handleToast.js";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyIsInNvdXJjZXMiOlsicGFnZXMvcmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBb0IsQ0FBQztBQUN0RSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBcUIsQ0FBQztBQUNuRSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBcUIsQ0FBQztBQUN6RSxNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUM3QyxrQkFBa0IsQ0FDQyxDQUFDO0FBQ3RCLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUVsRSxpQ0FBaUM7QUFDakMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDN0MsZUFBZSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFPLENBQUMsRUFBRSxFQUFFO0lBQzFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUVuQixJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7U0FBTSxDQUFDO1FBQ04sZUFBZSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx3REFBd0Q7SUFDeEQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQztRQUMxQixPQUFPO0lBQ1QsQ0FBQztJQUVELE1BQU0sSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBRXpFLElBQUksQ0FBQztRQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhDLElBQUksY0FBYyxFQUFFLENBQUM7WUFDbkIsY0FBYyxDQUFDLFNBQVMsR0FBRzs7Z0JBRWpCLE1BQU07O1lBRVYsQ0FBQztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNmLElBQUksY0FBYyxFQUFFLENBQUM7WUFDbkIsY0FBYyxDQUFDLFNBQVMsR0FBRzs7Z0JBRWpCLEtBQUs7O1lBRVQsQ0FBQztRQUNULENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUvQyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ1YsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7QUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=
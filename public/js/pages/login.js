var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { authenticateUser } from "../api/authenticateUser";
const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const toastContainer = document.getElementById("toast-container");
function handleToast() {
    const toast = document.querySelector(".toast");
    let timeLeft = 5;
    if (toast) {
        const countdown = setInterval(() => {
            if (toastContainer) {
                if (timeLeft <= 0) {
                    clearTimeout(countdown);
                    toastContainer.innerHTML = "";
                }
                else {
                    timeLeft -= 1;
                }
            }
        }, 1000);
        toast.addEventListener("click", () => {
            if (toastContainer) {
                toastContainer.innerHTML = "";
                clearTimeout(countdown);
            }
        });
    }
}
form.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const body = { email: email.value, password: password.value };
    try {
        const result = yield authenticateUser(body);
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
    handleToast();
}));
//   email: "admin@example.com",
//   password: "verysecret"
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyIsInNvdXJjZXMiOlsicGFnZXMvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFM0QsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQW9CLENBQUM7QUFDdEUsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXFCLENBQUM7QUFDbkUsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXFCLENBQUM7QUFDekUsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRWxFLFNBQVMsV0FBVztJQUNsQixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRS9DLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNqQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ1YsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDbEIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN4QixjQUFjLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDaEMsQ0FBQztxQkFBTSxDQUFDO29CQUNOLFFBQVEsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDbkMsSUFBSSxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsY0FBYyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQzlCLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQztBQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBTyxDQUFDLEVBQUUsRUFBRTtJQUMxQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkIsTUFBTSxJQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTlELElBQUksQ0FBQztRQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUNuQixjQUFjLENBQUMsU0FBUyxHQUFHOztnQkFFakIsTUFBTTs7WUFFVixDQUFDO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2YsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUNuQixjQUFjLENBQUMsU0FBUyxHQUFHOztnQkFFakIsS0FBSzs7WUFFVCxDQUFDO1FBQ1QsQ0FBQztJQUNILENBQUM7SUFDRCxXQUFXLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0NBQWdDO0FBQ2hDLDJCQUEyQiJ9
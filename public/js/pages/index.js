// elements for the mobile mockup preview
const nameContainer = document.querySelector(".mobile-name-container");
const emailContainer = document.querySelector(".mobile-email-container");
const mobileImageContainer = document.querySelector(".mobile-image-container");
const addLinkContainer = document.getElementById("add-link-container");
const addLinkBtn = document.getElementById("add-link-btn");
const platforms = [
    "codepen",
    "codewars",
    "devto",
    "facebook",
    "freecodecamp",
    "frontend-mentor",
    "github",
    "gitlab",
    "hashnode",
    "linkedin",
    "stack-overflow",
    "twitch",
    "twitter",
    "youtube"
];
let addLinkCount = 0;
const addLinkHtmlArray = [];
addLinkBtn === null || addLinkBtn === void 0 ? void 0 : addLinkBtn.addEventListener("click", () => {
    addLinkCount += 1;
    addLinkHtmlArray.push(`
      <div
      class="flex justify-center items-center flex-col bg-greyLight p-5 rounded-md  gap-4"
      >
      <div
        class="flex w-full items-center justify-between font-bold text-bm text-grey"
      >
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="6"
            fill="none"
            viewBox="0 0 12 6"
            class="label-svg"
          >
            <path fill="#737373" d="M0 0h12v1H0zM0 5h12v1H0z" />
          </svg>
          <p>Link #${addLinkCount}</p>
        </div>
        <p class="font-normal">Remove</p>
      </div>
      
      <div class="flex flex-col w-full gap-5">
        <div>
          <label
            class="block mb-1 text-bs text-grey font-semibold self-start"
            >Platform</label
          >
          <div
            id="select-${addLinkCount}"
            class="w-full relative border border-borders bg-white rounded-md h-10 flex items-center justify-between px-3 py-6"
          > <span id="current-selected-${addLinkCount}" class="flex gap-3">Choose Platform</span>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="9"
          fill="none"
          viewBox="0 0 14 9"
          >
            <path stroke="#633CFF" stroke-width="2" d="m1 1 6 6 6-6" />
          </svg>
          <div
          id="select-list-${addLinkCount}"
          class="w-full overflow-y-scroll max-h-60 bg-white border absolute top-12 border-borders right-0 p-0 hidden"
          >
            <ul class="flex flex-col p-0">
            ${platforms
        .map((platform) => {
        return `<li
                id="${platform}"
                class="flex gap-2 p-2 hover:bg-greyLight cursor-default"
            >
              <img src="./images/icon-${platform}.svg" alt="${platform} logo" />
              <span class="capitalize">${platform}</span>
            </li>`;
    })
        .join("")}
              
            </ul>
          </div></div>
        </div>
      
        <div class="flex flex-col w-full">
          <label
            class="block mb-1 text-bs text-grey font-semibold self-start"
            >Link</label
          >
          <div class="bg-white">
            <input
           
              class="block w-full border-borders rounded-md p-3 pl-10 placeholder:text-greyDark placeholder:text-opacity-50 focus:ring-0 focus:shadow-activeSelection focus:ring-inset focus:ring-purple link-input"
              type="url"
              id="first-name"
              placeholder="e.g. https://www.github.com/johnappleseed"
            />
          </div>
        </div>
      </div>
      </div>
      `);
    if (addLinkContainer != null) {
        if (addLinkCount === 1) {
            addLinkContainer.innerHTML =
                addLinkHtmlArray[addLinkHtmlArray.length - 1];
        }
        else {
            addLinkContainer.innerHTML +=
                addLinkHtmlArray[addLinkHtmlArray.length - 1];
        }
    }
    for (let i = 1; i <= addLinkCount; i += 1) {
        const currentSelected = document.getElementById(`current-selected-${i}`);
        const select = document.getElementById(`select-${i}`);
        const setPlatform = (platformId) => {
            if (currentSelected) {
                currentSelected.innerHTML = ` <img src="./images/icon-${platformId}.svg" alt="${platformId} logo" />
                                      <span class="capitalize">${platformId}</span>`;
            }
        };
        const selectList = document.getElementById(`select-list-${i}`);
        // Listen for clicks outside of the select in order to hide the select items list
        document.addEventListener("click", (e) => {
            const { target } = e;
            if (!(selectList === null || selectList === void 0 ? void 0 : selectList.contains(target)) &&
                !(select === null || select === void 0 ? void 0 : select.contains(target))) {
                selectList === null || selectList === void 0 ? void 0 : selectList.classList.add("hidden");
            }
            const newTarget = e.target.closest(`#select-list-${i} li`);
            if (newTarget) {
                const platformId = newTarget.id;
                setPlatform(platformId);
            }
        });
        // Listen for clicks on the select in order to show/hide the select items list
        select === null || select === void 0 ? void 0 : select.addEventListener("click", () => {
            selectList === null || selectList === void 0 ? void 0 : selectList.classList.toggle("hidden");
        });
    }
});
const updateUIWithData = (profile) => {
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
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyIsInNvdXJjZXMiOlsicGFnZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEseUNBQXlDO0FBQ3pDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN2RSxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDekUsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUNqRCx5QkFBeUIsQ0FDTixDQUFDO0FBQ3RCLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3ZFLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFM0QsTUFBTSxTQUFTLEdBQUc7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixPQUFPO0lBQ1AsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFFBQVE7SUFDUixVQUFVO0lBQ1YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsU0FBUztJQUNULFNBQVM7Q0FDVixDQUFDO0FBRUYsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLE1BQU0sZ0JBQWdCLEdBQWEsRUFBRSxDQUFDO0FBRXRDLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ3pDLFlBQVksSUFBSSxDQUFDLENBQUM7SUFFbEIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBa0JILFlBQVk7Ozs7Ozs7Ozs7Ozt5QkFZUixZQUFZOzt5Q0FFSSxZQUFZOzs7Ozs7Ozs7Ozs0QkFXekIsWUFBWTs7OztjQUkxQixTQUFTO1NBQ1IsR0FBRyxDQUFDLENBQUMsUUFBUSxF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
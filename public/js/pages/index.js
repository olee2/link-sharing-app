// elements for the mobile mockup preview
const nameContainer = document.querySelector(".mobile-name-container");
const emailContainer = document.querySelector(".mobile-email-container");
const mobileImageContainer = document.querySelector(".mobile-image-container");
const select = document.getElementById("select");
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
const selectHtml = `
                  <span id="current-selected" class="flex gap-2">Choose Platform</span>
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
                      id="select-list"
                      class="w-full overflow-scroll max-h-60 bg-white border absolute top-9 border-borders right-0 p-0 hidden"
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
                      </div>`;
if (select != null) {
    select.innerHTML += selectHtml;
}
const currentSelected = document.getElementById("current-selected");
const setPlatform = (platformId) => {
    if (currentSelected) {
        currentSelected.innerHTML = ` <img src="./images/icon-${platformId}.svg" alt="${platformId} logo" />
                                  <span class="capitalize">${platformId}</span>`;
    }
};
const selectList = document.getElementById("select-list");
// Listen for clicks outside of the select in order to hide the select items list
document.addEventListener("click", (e) => {
    const { target } = e;
    if (!(selectList === null || selectList === void 0 ? void 0 : selectList.contains(target)) &&
        !(select === null || select === void 0 ? void 0 : select.contains(target))) {
        selectList === null || selectList === void 0 ? void 0 : selectList.classList.add("hidden");
    }
    const newTarget = e.target.closest("#select-list li");
    if (newTarget) {
        const platformId = newTarget.id;
        setPlatform(platformId);
    }
});
// Listen for clicks on the select in order to show/hide the select items list
select === null || select === void 0 ? void 0 : select.addEventListener("click", () => {
    selectList === null || selectList === void 0 ? void 0 : selectList.classList.toggle("hidden");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyIsInNvdXJjZXMiOlsicGFnZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEseUNBQXlDO0FBQ3pDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN2RSxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDekUsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUNqRCx5QkFBeUIsQ0FDTixDQUFDO0FBRXRCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakQsTUFBTSxTQUFTLEdBQUc7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixPQUFPO0lBQ1AsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFFBQVE7SUFDUixVQUFVO0lBQ1YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsU0FBUztJQUNULFNBQVM7Q0FDVixDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBZ0JLLFNBQVM7S0FDUixHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtJQUNoQixPQUFPO2dDQUNELFFBQVE7OztrREFHVSxRQUFRLGNBQWMsUUFBUTttREFDN0IsUUFBUTs0QkFDL0IsQ0FBQztBQUNMLENBQUMsQ0FBQztLQUNELElBQUksQ0FBQyxFQUFFLENBQUM7Ozs2QkFHSixDQUFDO0FBRTlCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ25CLE1BQU0sQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDO0FBQ2pDLENBQUM7QUFDRCxNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFcEUsTUFBTSxXQUFXLEdBQUcsQ0FBQyxV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
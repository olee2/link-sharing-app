import { platforms } from "../constants/platforms.js";
export const createAddLinkHtml = (num) => {
    return `
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
     <p>Link #${num}</p>
   </div>
   <p id=remove-${num} class="font-normal">Remove</p>
 </div>
 
 <div class="flex flex-col w-full gap-5">
   <div>
     <label
       class="block mb-1 text-bs text-grey font-semibold self-start"
       >Platform</label
     >
     <div
       id="select-${num}"
       class="w-full relative border border-borders bg-white rounded-md h-10 flex items-center justify-between px-3 py-6"
     > <span id="current-selected-${num}" class="flex gap-3">Choose Platform</span>
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
     id="select-list-${num}"
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
     <div class="flex justify-between">
      <label class="block mb-1 text-bs text-grey font-semibold self-start">Link</label>
      <p id="invalid-link-${num}" class="text-red text-bs hidden">Enter a valid URL (e.g. https://www.github.com/johnappleseed)</p>
     </div>
     
     
     <div class="bg-white">
       <input
         required
         class="block w-full border-borders rounded-md p-3 pl-10 placeholder:text-greyDark placeholder:text-opacity-50 focus:ring-0 focus:shadow-activeSelection focus:ring-inset focus:ring-purple link-input"
         type="url"
         id="link-${num}"
         placeholder="e.g. https://www.github.com/johnappleseed"
       />
     </div>
   </div>
 </div>
 </div>
 `;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQWRkTGlua0h0bWwuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jcmVhdGVBZGRMaW5rSHRtbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFdEQsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtJQUMvQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBa0JPLEdBQUc7O2tCQUVELEdBQUc7Ozs7Ozs7Ozs7b0JBVUQsR0FBRzs7b0NBRWEsR0FBRzs7Ozs7Ozs7Ozs7dUJBV2hCLEdBQUc7Ozs7U0FJakIsU0FBUztTQUNSLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ2hCLE9BQU87aUJBQ0QsUUFBUTs7O21DQUdVLFFBQVEsY0FBYyxRQUFRO29DQUM3QixRQUFRO2FBQy9CLENBQUM7SUFDTCxDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7NEJBU1UsR0FBRzs7Ozs7Ozs7O29CQVNYLEdBQUc7Ozs7Ozs7RUFPckIsQ0FBQztBQUNILENBQUMsQ0FBQyJ9
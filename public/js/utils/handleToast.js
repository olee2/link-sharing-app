/**
 * This function handles a "toast" notification in a given container element.
 * The toast lasts for 5 seconds, after which the content of the container is cleared.
 * If the container is clicked during this time, the countdown is stopped and the content is immediately cleared.
 *
 * @param {Element} container - The container element for the toast notification.
 */
export const handleToast = (container) => {
    if (!container)
        return;
    const timeout = setTimeout(() => {
        container.innerHTML = "";
    }, 5000);
    container.addEventListener("click", () => {
        clearTimeout(timeout);
        container.innerHTML = "";
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlVG9hc3QuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyIsInNvdXJjZXMiOlsidXRpbHMvaGFuZGxlVG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLENBQUMsU0FBa0IsRUFBRSxFQUFFO0lBQ2hELElBQUksQ0FBQyxTQUFTO1FBQUUsT0FBTztJQUN2QixNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQzlCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVULFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3ZDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QixTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9
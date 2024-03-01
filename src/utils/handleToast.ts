/**
 * This function handles a "toast" notification in a given container element.
 * The toast lasts for 5 seconds, after which the content of the container is cleared.
 * If the container is clicked during this time, the countdown is stopped and the content is immediately cleared.
 *
 * @param {Element} container - The container element for the toast notification.
 */
export const handleToast = (container: Element) => {
  if (!container) return;
  const timeout = setTimeout(() => {
    container.innerHTML = "";
  }, 5000);

  container.addEventListener("click", () => {
    clearTimeout(timeout);
    container.innerHTML = "";
  });
};

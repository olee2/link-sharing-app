/**
 * Validates if the image file has a valid type and dimensions.
 *
 * This function creates a Promise that resolves to true if the image file is of a valid type
 * and its dimensions are less than or equal to 1024x1024. Otherwise, the Promise resolves to false.
 *
 * @param {File} file - The image file to validate.
 * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating if the image file is valid.
 */

export const validateImage = (file: File): Promise<boolean> => {
  const validImageTypes = ["image/jpeg", "image/png"];

  return new Promise((resolve, reject) => {
    if (!validImageTypes.includes(file.type)) {
      // Invalid image format
      reject(false);
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = function () {
      if (img.width <= 1024 && img.height <= 1024) {
        // Valid image dimensions

        resolve(true);
      } else {
        // Invalid image dimensions
        reject(false);
      }
    };
    img.onerror = function () {
      reject(false);
    };
  });
};

/**
 * Validates if the image file has a valid type and dimensions.
 *
 * This function creates a Promise that resolves to true if the image file is of a valid type
 * and its dimensions are less than or equal to 1024x1024. Otherwise, the Promise resolves to false.
 *
 * @param {File} file - The image file to validate.
 * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating if the image file is valid.
 */
export const validateImage = (file) => {
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
            }
            else {
                // Invalid image dimensions
                reject(false);
            }
        };
        img.onerror = function () {
            reject(false);
        };
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVJbWFnZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIiwic291cmNlcyI6WyJ1dGlscy92YWxpZGF0ZUltYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUgsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsSUFBVSxFQUFvQixFQUFFO0lBQzVELE1BQU0sZUFBZSxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRXBELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDekMsdUJBQXVCO1lBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQixDQUFDO1FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN4QixHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLE1BQU0sR0FBRztZQUNYLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDNUMseUJBQXlCO2dCQUV6QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLDJCQUEyQjtnQkFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hCLENBQUM7UUFDSCxDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsT0FBTyxHQUFHO1lBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=
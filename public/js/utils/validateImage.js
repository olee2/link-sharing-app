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
            reject(new Error("Invalid image format"));
        }
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
            if (img.width <= 1024 && img.height <= 1024) {
                // Valid image dimensions
                resolve(true);
            }
            else {
                // Invalid image dimensions
                reject(new Error("Invalid image dimension"));
            }
        };
        img.onerror = () => {
            reject(new Error("An error occured while validating image"));
        };
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVJbWFnZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIiwic291cmNlcyI6WyJ1dGlscy92YWxpZGF0ZUltYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUgsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsSUFBVSxFQUFvQixFQUFFO0lBQzVELE1BQU0sZUFBZSxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRXBELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDekMsdUJBQXVCO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVELE1BQU0sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDeEIsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2hCLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDNUMseUJBQXlCO2dCQUV6QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLDJCQUEyQjtnQkFDM0IsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztZQUMvQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDakIsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9
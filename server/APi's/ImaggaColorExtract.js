import got from "got"
import fs from "fs"
import FormData from "form-data";

const apiKey = process.env.IMAGGA_API_KEY;
const apiSecret = process.env.IMAGGA_API_SECRET;

const extractObjectColors = 0;
const overallCount = 3;

const uploadImageAndGetId = async (imageLink) => {
    const form = new FormData();
    form.append('image', fs.createReadStream(imageLink)); 
    try {
        const res = await got.post('https://api.imagga.com/v2/uploads', {
            body: form,
            username: apiKey,
            password: apiSecret,
        });
        const uploadId = JSON.parse(res.body).result.upload_id;
        return uploadId;

    } catch (err) {
        console.log(err.response);
    }
};

const extractColors = async (uploadId) => {
    try {
        const res = await got.get(`https://api.imagga.com/v2/colors?image_upload_id=${uploadId}&extract_object_colors=${extractObjectColors}&overall_count=${overallCount}`, {
            username: apiKey,
            password: apiSecret,
        });
        const colorSet = JSON.parse(res.body).result.colors.image_colors;
        const colors = colorSet.map(colorSet => colorSet.html_code);
        return colors;

    } catch (err) {
        console.log(err.response);
    }
};

const imageColors = async (imageLink) => {
    try {
        const uploadId = await uploadImageAndGetId(`../client/src/assets/${imageLink}`);
        const colors = await extractColors(uploadId);
        console.log('Extracted Colors:', colors);
        return colors;
        
    } catch (error) {
        console.error(error.response);
    }
};

export default imageColors;
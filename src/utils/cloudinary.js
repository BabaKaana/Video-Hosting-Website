import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_CLOUD_KEY, 
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET
});

const uploadOnCloudinary = async (localfilepath) => {
    try {
        if (!localfilepath) return null;
        const response = await cloudinary.v2.uploader.upload(localfilepath, {resource_type: "auto"});
        console.log('File has been uploaded.');
        fs.unlinkSync(localfilepath);
        return response;
    } catch (error) {
        fs.unlinkSync(localfilepath);
        return null;
    }
}

export default uploadOnCloudinary;
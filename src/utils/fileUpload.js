import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SECRET 
});

const fileUpload=async(filePath)=>{
    try {
        if (!filePath) return null; 
        const response = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto" 
        });
        
        fs.unlinkSync(filePath);
        return response;

    } catch (error) {
        fs.unlinkSync(filePath);
        return null; 
    }

}

export default fileUpload
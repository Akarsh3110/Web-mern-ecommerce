const cloudinary=require('cloudinary').v2;
const multer=require('multer');

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
    // '-HMVOzFYY_dtKyER61qh_xU9EEQ'
})

const storage=new multer.memoryStorage();

async function imageUploadUtils(file) {
    const result=cloudinary.uploader.upload(file,{
        resource_type:'auto'
    })

    return result;
}

const upload=multer({storage});

module.exports={upload,imageUploadUtils}
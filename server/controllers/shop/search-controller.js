const Product=require('../../models/product.model')

const searchProducts=async(req,res)=>{
    try {
        const {keyword}=req.params;
        if(!keyword || typeof keyword!=='string'){
            return res.status(400).json({
                success:false,
                message:'Keyword is required and must be in string'
            })
        }

        const regEx=new RegExp(keyword,'i');

        const createSearchQuery={
            $or:[
                {title:regEx},
                {description:regEx},
                {category:regEx},

            ]
        }

        const searchResults=await Product.find(createSearchQuery);
        res.status(200).json({
            success:true,
            data:searchResults,
            message:'searching'
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success:false,
            message:'Some Error Occurred'
        })
    }
}

module.exports={
    searchProducts
}
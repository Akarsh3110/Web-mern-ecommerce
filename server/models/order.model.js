const mongoose=require('mongoose');

const OrderSchema=new mongoose.Schema({
    userId:String,
    cartId:String,
    cartItems:[
        {
            productId:String,
            title:String,
            image:String,
            price:String,
            quantity:Number,
        }
    ],
    address:{
        addressId:String,
        name:String,
        email:String,
        address:String,
        city:String,
        state:String,
        country:String,
        pincode:String,
        phone:String
    },
    orderStatus:String,
    paymentMethod:String,
    paymentStatus:String,
    totalAmount:Number,
    orderDate:Date,
    orderUpdateDate:Date,
    paymentId:String,
    payerId:String
})

module.exports=mongoose.model('Order',OrderSchema)
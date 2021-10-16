const mongoose = require("mongoose");;
const { Schema } = mongoose;


const cell_schema = new Schema(
    {
        productName : String,
        productType : String,
        price : Number,
        imgUrl : String
    }
)

const Seller_Schema = new Schema(
    {
        email : String,
        buyer_email : String,
        product : [[cell_schema]]
    }
)

const Seller = mongoose.model("Seller",Seller_Schema)
module.exports = Seller;
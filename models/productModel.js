import mongoose from "mongoose"
const productSchema = mongoose.Schema({
    productname : {type: String},
    price: {type:Number},
});
const product = mongoose.model("Product",productSchema);
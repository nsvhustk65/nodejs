import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ProductSchema = new Schema(
    {name: {type:String, require:true},
    price:{type:Number},
    image:{type:String}
},
{timestamps:true}
);
const Product = mongoose.model("Product",ProductSchema);

export default Product;
const mongoose = require('mongoose');
const  cartSchema = new mongoose.Schema({
        id :  {type: Number, required : true},
        name : {type: String, required : true},
        salesprice: {type: Number},
        mainImage: {type: String, required : true},
        unit: {type:String},
        stocks: {type: Number},
});
module.exports = mongoose.model('Cart', cartSchema);


        // id: { type: Number, required : true},
        // name: {type: String, required : true},
        // regularprice: {type: Number, required : true},
        // salesprice: {type: Number, required : true},
        // category: {type: String, required:true},
        // unit: {type:String, required: true},
        // stocks: {type: Number, required : true},
        // mainImage: {type: String, required : true},
        // sideImage1: {type: String, required : true},
        // sideImage2: {type: String, required : true},
        // description: {type: String, required : true},
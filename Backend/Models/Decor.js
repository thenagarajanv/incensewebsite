const mongoose = require('mongoose');
const  decorSchema = new mongoose.Schema({
        id: { type: Number, required : true},
        name: {type: String, required : true},
        regularprice: {type: Number, required : true},
        salesprice: {type: Number, required : true},
        category: {type: String, required:true},
        unit: {type:String, required: true},
        stocks: {type: Number, required : true},
        mainImage: {type: String, required : true},
        sideImage1: {type: String, required : true},
        sideImage2: {type: String, required : true},
        description: {type: String, required : true},
});
module.exports = mongoose.model('Decor', decorSchema);

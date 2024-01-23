const mongoose = require('mongoose');
const  schema=new mongoose.Schema({
        id: { type: Number},
        name: {type: String},
        regularprice: {type: Number},
        salesprice: {type: Number},
        category: {type: String},
        unit: {type:String},
        stocks: {type: Number},
        mainImage: {type: String,},
        sideImage1: {type: String},
        sideImage2: {type: String},
        description: {type: String},
        amount: {type: Number},
        count: {type: Number},
});
module.exports = mongoose.model('Incense', schema);


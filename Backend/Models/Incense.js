const mongoose=require('mongoose');
const  schema=new mongoose.Schema({
        id: { type: Number, required : true},
        name: {type: String, required : true},
        price: {type: Number, required : true},
        description: {type: String, required : true},
        mainImage: {type: String, required : true},
        fsImage: {type: String, required : true},
        ssImage: {type: String, required : true},
        inCart: {type: Boolean, required:true},
        count: {type: Number, required : true},
});
module.exports = mongoose.model('Incense', schema);


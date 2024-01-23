const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {type: String, required: true, unique:true},
    name:{type: String},
    email:{type: String},
    cart:[{
        id: {type: Number},
        name: {type: String},
        salesprice: {type: Number},
        stocks: {type: Number},
        mainImage: {type: String},
        amount: {type: Number},
        count: {type: Number},
    }]
});

module.exports = mongoose.model('User', userSchema);


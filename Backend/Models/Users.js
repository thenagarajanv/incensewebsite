const mongoose = require('mongoose');
const Cart = require('./Cart');
const  userSchema = new mongoose.Schema({
        name : {type: String, required : true},
        email : {type: String, required : true, unique: true},
        userCart:[{type: Schema.Types.ObjectId, ref: Cart}]
});
module.exports = mongoose.model('Cart', userSchema);
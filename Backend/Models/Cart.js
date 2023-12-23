const mongoose = require('mongoose');
const  cartSchema = new mongoose.Schema({
        id :  {type: Number, required : true}
});
module.exports = mongoose.model('Cart', cartSchema);
const userModel = require("../Models/Cart");

module.exports.addToCart = async (req, res) => {
    console.log(req.body, "62")
    const isUpdate = userModel.updateOne({id : req.body.id },{
        $addToSet : { cart: req.body.id }
    })

    if(isUpdate){
        return res.status(200).send(req.json())
    }
} 
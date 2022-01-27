const mongoose = require("mongoose");

const cadastroSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type:String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    birthdate: {
        type:String,
         required: true,
    },
    address: {
        type: String,
        required: true,
    },
    addressNumber:{
        type: String,
        required: true,
    },
    addressNumber: {
        type:String,
        required: true,
    },
    primaryPhone: {
        type: String,
        required: true,
    },
    description: {
        type:String,
        required: true,
    },
    createdAt: {
        type: Date,
        default:Date.now,
        required: true,
    },
    
})
//EXPORTANDO
module.exports = mongoose.model("Cadastro", cadastroSchema);
const {v4: uuid} = require("uuid");
const Cadastro = require("../models/cadastro");

//CRIANDO A LISTA DE CADASTRO
module.exports = {
    async index(request, response) {
        try {
            const cadastro = await Cadastro.find();
            return response.status(200).json({ cadastro });
        }catch(err){
            response.status(500).json({ error: err.message });
        }
    },
//CRIANDO O CADASTRO
    async store (request, response) {
        const { name, username, birthdate,address,addressNumber,primaryPhone,description} = request.body;

        if (!name||!username||!birthdate||!address||!addressNumber||!primaryPhone||!description) {
            return response.status(400).json({ error: "Falta no cadastro"});
        }

        const cadastro = new Cadastro({
            _id: uuid(),
            name,
            username,
            birthdate, 
            address, 
            addressNumber, 
            primaryPhone, 
            description,
            createdAt: Date.now(),
        });

        try {
            await cadastro.save();

            return response.status(201).json({ message: "Cadastro criado com sucesso!" });
        }catch(err) {
            response.status(500).json({ error: err.message });
        }
    },
//CRIANDO UPDATE
    async update(request, response) {
        const {name, username, birthdate,address,addressNumber,primaryPhone,description} = request.body;

        if (!name && !username && !birthdate && !address && !addressNumber && !primaryPhone && !description) {
            return response
            .status(400)
            .json({ error: "Você deve informar um novo parametro"})
        }

        if (name) response.cadastro.name = name;
        if (username) response.cadastro.username = username;
        if (birthdate) response.cadastro.birthdate = birthdate;
        if (address) response.cadastro.address = address;
        if (addressNumber) response.cadastro.addressNumber = addressNumber;
        if (primaryPhone) response.cadastro.primaryPhone = primaryPhone;
        if (description) response.cadastro.description = description;

        try{
            await response.cadastro.save();
            return response.status(200).json({message: "Cadastro atualizado com sucesso"})

        }catch (err){
            res.status(500).json({ error: err.message});
        }

    },
    // CRIANDO DELETAR CADASTRO
    async delete(request, response) {
        try{
            await response.cadastro.remove();
            return response.status(200).json({ message: "cadastro deletado com sucesso!"})
        }catch(err){
            return response.status(500).json({ error:err.message})
        }
    }
};
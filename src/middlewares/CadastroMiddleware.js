const req = require("express/lib/request");
const res = require("express/lib/response");
const { validate: isUuid} = require("uuid");
const { validate } = require("../models/cadastro");
const Cadastro = require("../models/cadastro");

module.exports = {
    async validateId (request, response, next) {
        const {id} = request.params;

        if(!isUuid(id)){
            return response.status(400).json({ error: "id invalido" });
        }

        try {
            const cadastro = await Cadastro.findById(id);
            response.cadastro = cadastro;
            if (!cadastro) {
                return response.status(404).json({ error: "Cadastro não encontrado"})
            }
        } catch (err) {
            return response.status(500).json({ error: err.message});
        }



        next();
    }
}
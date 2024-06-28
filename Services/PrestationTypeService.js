const PrestationType = require("../Models/PrestationType");

class PrestationTypeService {
    async getAllPrestationType(){
        return await PrestationType.findAll();
    }
}

module.exports = new PrestationTypeService();
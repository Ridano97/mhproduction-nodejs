const PrestationType = require("../Models/PrestationType");

class PrestationTypeService {
    async GetAllPrestationType(){
        return await PrestationType.findAll();
    }
}

module.exports = new PrestationTypeService();
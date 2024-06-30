const PrestationType = require("../Models/PrestationType");

class PrestationTypeService {
    async getAllPrestationType(){
        return await PrestationType.findAll();
    }

    async getPrestationTypeByID(prestationtypeID){
        return await PrestationType.findByPk(prestationtypeID)
    }

    async addPrestationType(prestationtype){
        return await PrestationType.create(prestationtype)
    }

    async removePrestationType(prestationtypeID){
        return await PrestationType.destroy({
            where : { prty_id : prestationtypeID}
        })
    }

    async updatePrestationType(prestationtypeID, prestationtype){
        return await PrestationType.update(prestationtype, {
            where : {prty_id : prestationtypeID}
        })
    }


}

module.exports = new PrestationTypeService();
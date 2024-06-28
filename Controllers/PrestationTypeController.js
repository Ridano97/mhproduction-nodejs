const PrestationTypeService = require("../Services/PrestationTypeService");

class PrestationTypeController{
    async GetAllPrestationType(request, result){
        try {
            const prestationstypes = await PrestationTypeService.GetAllPrestationType();
            result.json(prestationstypes)
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({error : "Echec de la récupération des prestations types"})
        }
    }
}

module.exports = new PrestationTypeController();
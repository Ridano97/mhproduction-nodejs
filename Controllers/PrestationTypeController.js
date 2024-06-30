const PrestationTypeService = require("../Services/PrestationTypeService");

class PrestationTypeController{
    async getAllPrestationType(request, result){
        try {
            const prestationstypes = await PrestationTypeService.getAllPrestationType();
            result.json(prestationstypes)
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({error : "Echec de la récupération des prestations types"})
        }
    }

    async getPrestationTypeByID(request, result){
        try {
            const prestationstypes = await PrestationTypeService.getPrestationTypeByID(request.params.id);
            result.json(prestationstypes)
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans la récupération de l'ID prestation type"})
        }
    }

    async addPrestationType(request, result){
        try {
            const prestationstypes = PrestationTypeService.addPrestationType(request.body);
            result.json(prestationstypes)
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans l'ajout de la prestation type"})
        }
    }

    async removePrestationType(request, result){
        try {
            PrestationTypeService.removePrestationType(request.params.id)
            result.json({message : "Prestation type supprimé"})
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans la suppression de la prestation type"})
        }
    }

    async updatePrestationType(request, result){
        try {
            const prestationstypes = await PrestationTypeService.updatePrestationType(request.params.id, request.body)
            result.json(prestationstypes)
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans la modificationd de la prestation type"})
        }
    }


}

module.exports = new PrestationTypeController();
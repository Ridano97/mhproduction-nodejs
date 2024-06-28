const EntrepriseService = require("../Services/EntrepriseService");

class EntrepriseController {
    async getAllEntreprise(request, result){
        try {
            const entreprises = await EntrepriseService.getAllEntreprise();
            result.json(entreprises);
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({error : "Echec dans la récupération des enteprises"})
        }
    }

    async getEntrepriseByID(request, result){
        try {
            const entreprises = await EntrepriseService.getEntrepriseByID(request.params.id);
            result.json(entreprises)
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans la récupération de l'entreprise par ID"})
        }
    }

    async addEntreprise(request, result){
        try {
            const entreprises = await EntrepriseService.addEntreprise(request.body);
            result.json(entreprises)
        } catch (error) {
            console.log(error);
            result.status(500)
            result.json({error : "Echec lors de l'ajout de l'entreprise "})
        }
    }

}

module.exports = new EntrepriseController();
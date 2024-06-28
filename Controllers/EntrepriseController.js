const EntrepriseService = require("../Services/EntrepriseService");

class EntrepriseController {
    async GetAllEntreprise(request, result){
        try {
            const entreprises = await EntrepriseService.GetAllEntreprise();
            result.json(entreprises);
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({error : "Echec dans la récupération des enteprises"})
        }
    }

}

module.exports = new EntrepriseController();
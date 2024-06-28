const ProjetService = require("../Services/ProjetService")

class ProjetController {
    async getAllProjet(request, result){
        try {
            const projets = await ProjetService.getAllProjet();
            result.json(projets)
        } catch (error) {
            console.log(error);
            result.status(500)
            result.json({error : "Echec de la récupération des projets"})
        }
    }
}


module.exports = new ProjetController();
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

    async getProjetByID(request, result){
        try {
            const projets = await ProjetService.getProjetByID(request.params.id);
            result.json(projets)
        } catch (error) {
            result.status(500)
            result.json({error : "Echec de la récupération de l'ID projet"})
        }
    }

    async addProjet(request, result){
        try {
            const projets = await ProjetService.addProjet(request.body);
            result.json(projets)
        } catch (error) {
            result.status(500)
            result.json({error : "Echec de l'ajout du projet"})
        }
    }

    async removeProjet(request, result){
        try {
            ProjetService.removeProjet(request.params.id)
            result.json({message : "Projet supprimé"})
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans la suppression du projet"})
        }
    }

    async updateProjet(request, result){
        try {
            const projets = ProjetService.updateProjet(request.params.id, request.body);
            result.json(projets)
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans la modification du projet"})
        }
    }
}


module.exports = new ProjetController();
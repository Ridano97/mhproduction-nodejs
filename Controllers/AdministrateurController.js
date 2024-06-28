const Administrateur = require("../Models/Administrateur");
const AdministrateurService = require("../Services/AdministrateurService");


class AdministrateurController {
    async getAllAdministrateur(request, result){
        try {
            const administrateurs = await AdministrateurService.getAllAdministrateur();
            result.json(administrateurs);
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans la récupération de l'administrateur"})
        }
    }

    async getAdministrateurByID(request, result){
        try {
            const administrateurs = await AdministrateurService.getAdministrateurByID(request.params.id)
            result.json(administrateurs)
        } catch (error) {
            result.status(500)
            result.json({error : "Echec danss la récupération de l'ID de l'administrateur"})
        }
    }

    async addAdministrateur(request, result){
        try {
            const administrateurs = await AdministrateurService.addAdministrateur(request.body);
            result.json(administrateurs);
        } catch (error) {
            console.log(error);
            result.status(500)
            result.json({error : "Echec dans l'ajout de l'administrateur"})
        }
    }

    async removeAdministrateur(request, result){
        try {
            AdministrateurService.removeAdministrateur(request.params.id)
            result.json({message : "Administrateur supprimé "})
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans la suppression de l'administrateur"})
        }
    }

    async updateAdministrateur(request, result){
        try {
            const administrateurs = await AdministrateurService.updateAdministrateur(request.params.id, request.body)
            result.json(administrateurs)
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans la modification de l'administrateur"})
        }
    }

}


module.exports = new AdministrateurController();
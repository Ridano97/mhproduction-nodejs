const AdministrateurService = require("../Services/AdministrateurService");


class AdministrateurController {
    async GetAllAdministrateur(request, result){
        try {
            const administrateurs = await AdministrateurService.GetAllAdministrateur();
            result.json(administrateurs);
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans la récupération de l'administrateur"})
        }
    }
}


module.exports = new AdministrateurController();
const Administrateur = require("../Models/Administrateur")

class AdministrateurService {

    async GetAllAdministrateur(){
        return await Administrateur.findAll();
    }

}

module.exports = new AdministrateurService() ;
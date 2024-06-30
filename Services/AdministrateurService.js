const Administrateur = require("../Models/Administrateur")

class AdministrateurService {

    async getAllAdministrateur(){
        return await Administrateur.findAll();
    }

    async getAdministrateurByID(administrateurID){
        return await Administrateur.findByPk(administrateurID);
    }

    async addAdministrateur(administrateur){
        return await Administrateur.create(administrateur);
    }

    async removeAdministrateur(administrateurID){
        return await Administrateur.destroy({
            where : { adm_ID : administrateurID}
        })
    }

    async updateAdministrateur(administrateurID, administrateur){
        return await Administrateur.update(administrateur, {
            where : { adm_id : administrateurID},
            individualHooks : true
        })
    }

}

module.exports = new AdministrateurService() ;
const Entreprise = require("../Models/Entreprise");

class EntrepriseService {

    async getAllEntreprise(){
        return await Entreprise.findAll({ include : "projets"}) ; 
    }
    async getEntrepriseByID(entrepriseID){
        return await Entreprise.findByPk(entrepriseID);
    }
    async addEntreprise(entreprise){
        return await Entreprise.create(entreprise);
    }
    async removeEntreprise(entrepriseID){
        return await Entreprise.destroy({
            where : { ent_id : entrepriseID}
        });
    }
    async updateEntreprise(entrepriseID, entreprise){
        return await Entreprise.update( entreprise, {
            where : { ent_id : entrepriseID},
            individualHooks : true
        })
    }
}
module.exports = new EntrepriseService() ;
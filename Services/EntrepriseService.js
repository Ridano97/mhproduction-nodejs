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

}


module.exports = new EntrepriseService() ;
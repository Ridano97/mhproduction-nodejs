const Entreprise = require("../Models/Entreprise");


class EntrepriseService {

    async GetAllEntreprise(){
        return await Entreprise.findAll({ include : "projets"}) ; 
    }

}


module.exports = new EntrepriseService() ;
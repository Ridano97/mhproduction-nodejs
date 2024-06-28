const Projet = require("../Models/Projet")

class ProjetService {

    async GetAllProjet(){
        return await Projet.findAll({include : "prestationvideos"});
    }
    
}


module.exports = new ProjetService();
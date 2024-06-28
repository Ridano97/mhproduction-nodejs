const Projet = require("../Models/Projet")

class ProjetService {

    async getAllProjet(){
        return await Projet.findAll({include : "prestationvideos"});
    }
    
}


module.exports = new ProjetService();
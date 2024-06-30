const Projet = require("../Models/Projet")

class ProjetService {

    async getAllProjet(){
        return await Projet.findAll({include : "prestationvideos"});
    }
    
    async getProjetByID(projetID){
        return await Projet.findByPk(projetID);
    }

    async addProjet(projet){
        return await Projet.create(projet);
    }

    async removeProjet(projetID){
        return await Projet.destroy({
            where : {pro_id : projetID}
        });
    }

    async updateProjet(projetID, projet){
        return await Projet.update(projet, {
            where : {pro_id : projetID}
        });
    }
}


module.exports = new ProjetService();
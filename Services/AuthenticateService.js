const config = require("../Config/config.json")
const jwt = require("jsonwebtoken")
const Administrateur = require("../Models/Administrateur");
const Entreprise = require("../Models/Entreprise");

class AuthenticateService {
    async register(administrateurData){
        const administrateur = await Administrateur.create(administrateurData);
        return this.generatetoken (administrateur)
    }

    async registerEntreprise(entrepriseData){
        const entreprise = await Entreprise.create(entrepriseData);
        return this.generatetokenII (entreprise)
    }

    async login(email, mdp){
        const administrateur = await Administrateur.findOne({ where : {adm_email : email}})
        if(!administrateur || !await administrateur.validatePassword(mdp)){
            throw new Error ("Email ou mot de passe n'est pas correct")
        }
        return this.generatetoken(administrateur);
    }
    async loginEntreprise(nom, mdp){
        const entreprise = await Entreprise.findOne({ where : {ent_nom : nom}})
        if(!entreprise || !await entreprise.validatePassword(mdp)){
            throw new Error ("Nom ou mot de passe n'est pas correct")
        }
        return this.generatetokenII(entreprise);
    }
   
    generatetoken(administrateur){
        const payload = {
            id : administrateur.adm_id,
            email : administrateur.adm_email,
            role : administrateur.adm_role 
        }
        return jwt.sign(payload,config.SECRET,{expiresIn:"2h"})
    }
    generatetokenII(entreprise){
        const payload = {
            id : entreprise.ent_id,
            nom : entreprise.ent_nom,
            role : entreprise.ent_role
        }
        return jwt.sign(payload,config.SECRET,{expiresIn:"2h"})
    }
}

module.exports = new AuthenticateService();
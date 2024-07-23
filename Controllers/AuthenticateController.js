const config = require("../Config/config.json")
const jwt = require("jsonwebtoken");
const AuthenticateService = require("../Services/AuthenticateService");

class AuthenticateController {
    
    async register(request, result){
        try {
            const administrateur = await AuthenticateService.register(request.body);
            result.json({administrateur : administrateur, message : "Inscription réussie"});
        } catch (error) {
            result.status(500)
            result.json({error : "Echec lors de l'inscription"})
        }
    }

    async registerEntreprise(request, result){
        try {
            const entreprise = await AuthenticateService.registerEntreprise(request.body);
            result.json({entreprise : entreprise, message : "Inscription réussie"});
        } catch (error) {
            result.status(500)
            result.json({error : "Echec lors de l'inscription entreprise"})
        }
    }

    async login(request, result){
        try {
            const {email, mdp} = request.body;
            const token = await AuthenticateService.login(email, mdp);
            result.json({token : token, message : "Connexion avec succès"})
        } catch (error) {
            result.status(401)
            console.log(error);
            result.json({error : "Mot de passe ou email incorrect"})
        }
    }

    async loginEntreprise(request, result){
        try {
            const {nom, mdp} = request.body;
            const token = await AuthenticateService.loginEntreprise(nom, mdp);
            result.json({token : token, message : "Connexion avec succès"})
        } catch (error) {
            result.status(401)
            console.log(error);
            result.json({error : "Mot de passe ou nom incorrect"})
        }
    }

  /*   async loginEntreprise(request, result) {
        try {
            const { nom, mdp } = request.body;
            console.log("Nom reçu:", nom);
            console.log("Mot de passe reçu:", mdp);
    
            const token = await AuthenticateService.loginEntreprise(nom, mdp);
            result.json({ token: token, message: "Connexion avec succès" });
        } catch (error) {
            result.status(401);
            console.log(error);
            result.json({ error: "Mot de passe ou nom incorrect" });
        }
    } */
    

    authenticateToken(request, result, next){
        const authHeader = request.headers["authorization"];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            result.status(401);
            return result.json({error : "Vous n'avez pas accès à cette route"});
        }

        jwt.verify(token, config.SECRET, (error, user) => {
            if(error){
                result.status(401)
                return result.json({error : "Votre token n'est pas valide"});
            }
            request.user = user ; 
            next()
        } )
    }
}

module.exports = new AuthenticateController();
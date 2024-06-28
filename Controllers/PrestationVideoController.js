const PrestationVideoService = require("../Services/PrestationVideoService");


class PrestationVideoController {
    async getAllPrestationVideo(request, result){
        try {
            const prestationvideos = await PrestationVideoService.getAllPrestationVideo();
            result.json(prestationvideos)
        } catch (error) {
            console.log(error);
            result.status(500)
            result.json({error : "Echec de la récupération des prestations vidéos"})
        }
    }
}

module.exports = new PrestationVideoController();
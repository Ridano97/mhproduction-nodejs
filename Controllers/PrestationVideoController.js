const PrestationVideoService = require("../Services/PrestationVideoService");


class PrestationVideoController {
    async GetAllPrestationVideo(request, result){
        try {
            const prestationvideos = await PrestationVideoService.GetAllPrestationVideo();
            result.json(prestationvideos)
        } catch (error) {
            console.log(error);
            result.status(500)
            result.json({error : "Echec de la récupération des prestations vidéos"})
        }
    }
}

module.exports = new PrestationVideoController();
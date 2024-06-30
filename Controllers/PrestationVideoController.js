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

    async getPrestationVideoByID(request, result){
        try {
            const prestationsvideos = await PrestationVideoService.getPrestationVideoByID(request.params.id);
            result.json(prestationsvideos)
        } catch (error) {
            result.status(500)
            result.json({error : "Echec de la récupération de l'ID prestation vidéo"})
        }
    }

    async addPrestationVideo(request, result){
        try {
            const prestationsvideos = PrestationVideoService.addPrestationVideo(request.body);
            result.json(prestationsvideos)
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans l'ajout de la prestation vidéo"})
        }
    }

    async removePrestationVideo(request, result){
        try {
            PrestationVideoService.removePrestationVideo(request.params.id);
            result.json({message : "Prestation Vidéo supprimée"})
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans la suppression de la prestation vidéo"})
        }
    }

    async updatePrestationVideo(request, result){
        try {
            const prestationsvideos = PrestationVideoService.updatePrestationVideo(request.params.id, request.body)
            result.json(prestationsvideos)
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans la modification de la prestation vidéo"})
        }
    }
}

module.exports = new PrestationVideoController();
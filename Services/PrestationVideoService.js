const PrestationVideo = require("../Models/PrestationVideo");

class PrestationVideoService {

    async getAllPrestationVideo(){
        return await PrestationVideo.findAll({include : "prestation_types"})
    }

   async getPrestationVideoByID(prestationvideoID){
        return await PrestationVideo.findByPk(prestationvideoID)
   }

    async addPrestationVideo(prestationvideo){
        return await PrestationVideo.create(prestationvideo)
    }

    async removePrestationVideo(prestationvideoID){
        return await PrestationVideo.destroy({
            where : {prest_id : prestationvideoID}
        })
    }

    async updatePrestationVideo(prestationvideoID, prestationvideo){
        return await PrestationVideo.update(prestationvideo, {
            where : {prest_id : prestationvideoID}
        })
    }
}


module.exports = new PrestationVideoService();
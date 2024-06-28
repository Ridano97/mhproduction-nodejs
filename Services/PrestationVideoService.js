const PrestationVideo = require("../Models/PrestationVideo");

class PrestationVideoService {

    async getAllPrestationVideo(){
        return await PrestationVideo.findAll({include : "prestation_types"})
    }

}


module.exports = new PrestationVideoService();
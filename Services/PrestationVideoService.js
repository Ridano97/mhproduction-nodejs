const PrestationVideo = require("../Models/PrestationVideo");

class PrestationVideoService {

    async GetAllPrestationVideo(){
        return await PrestationVideo.findAll({include : "prestation_types"})
    }

}


module.exports = new PrestationVideoService();
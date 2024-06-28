const Tag = require("../Models/Tag");


class TagService {

    async getAllTag() {
        return await Tag.findAll({include : "prestationvideos"});
    }


}

module.exports = new TagService() ;
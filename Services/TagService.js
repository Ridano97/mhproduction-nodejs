const Tag = require("../Models/Tag");


class TagService {

    async GetAllTag() {
        return await Tag.findAll({include : "prestationvideos"});
    }


}

module.exports = new TagService() ;
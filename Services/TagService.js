const Tag = require("../Models/Tag");


class TagService {

    async getAllTag() {
        return await Tag.findAll({include : "prestationvideos"});
    }

    async getTagByID(tagID){
        return await Tag.findByPk(tagID);
    }

    async addTag(tag){
        return await Tag.create(tag);
    }

    async removeTag(tagID){
        return await Tag.destroy({
            where : { tag_id : tagID}
        });
    }

    async updateTag(tagID, tag){
        return await Tag.update(tag, {
            where : {tag_id : tagID}
        })
    }
}

module.exports = new TagService() ;
const TagService = require("../Services/TagService");


class TagController {
    async getAllTag(request, result){
        try {
            const tags = await TagService.getAllTag();
            result.json(tags);
        } catch (error) {
            console.log(error);
        result.status(500)
        result.json({error : "Echec dans la récupération des tags"})    
        }
    }
}



module.exports = new TagController() ; 
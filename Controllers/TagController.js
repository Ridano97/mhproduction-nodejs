const TagService = require("../Services/TagService");


class TagController {
    async GetAllTag(request, result){
        try {
            const tags = await TagService.GetAllTag();
            result.json(tags);
        } catch (error) {
            console.log(error);
        result.status(500)
        result.json({error : "Echec dans la récupération des tags"})    
        }
    }
}



module.exports = new TagController() ; 
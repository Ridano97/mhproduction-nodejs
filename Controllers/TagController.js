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

    async getTagByID(request, result){
        try {
            const tags = await TagService.getTagByID(request.params.id);
            result.json(tags);
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans la récupération de l'ID tag"})
        }
    }

    async addTag(request, result){
        try {
            const tags = await TagService.addTag(request.body);
            result.json(tags);
        } catch (error) {
            result.status(500)
            result.json({error : "Echec dans l'ajout du tag"})
        }
    }

    async removeTag(request, result){
        try {
            TagService.removeTag(request.params.id);
            result.json({message : "Tag supprimé"})
        } catch (error) {
            result.json(500)
            result.json({error : "Echec dans la suppression du tag"})
        }
    }

    async updateTag(request, result){
        try {
        const tags = TagService.updateTag(request.params.id, request.body);
        result.json(tags)
    } catch (error) {
        result.status(500)
        result.json({error : "Echec dans la modification du tag"})
    }}

}



module.exports = new TagController() ; 
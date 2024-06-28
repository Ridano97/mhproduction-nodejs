const { Model, DataTypes } = require("sequelize");
const PrestationVideo = require("./PrestationVideo");
const sequelize = require("../Config/Sequelize");


class Tag extends Model {

}

Tag.init ({
    tag_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },

    tag_label : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, {

    sequelize,
    modelName : "Tag",
    tableName : "Tag",
    timestamps : false
    
})

Tag.hasMany(PrestationVideo, {as : "prestationvideos" , foreignKey : "prest_id"});
PrestationVideo.hasMany(Tag, {as : "Tags" , foreignKey : "tag_id" });

module.exports = Tag ;
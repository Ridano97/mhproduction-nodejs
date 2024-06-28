const { Model, DataTypes } = require("sequelize");
const PrestationVideo = require("./PrestationVideo");
const sequelize = require("../Config/Sequelize");


class Projet extends Model {

}


Projet.init ({
    pro_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },

    pro_description : {
        type : DataTypes.TEXT,
        allowNull : false
    },

    pro_date_souscription : {
        type : DataTypes.DATE,
        allowNull : false

    },

    ent_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "Entreprise",
            key : "ent_id"
        }
    }
},{

    sequelize,
    modelName : "Projet",
    tableName : "Projet",
    timestamps : false
    
} )

Projet.belongsTo(PrestationVideo,  {as : "prestationvideos", foreignKey : "pro_id"} )
PrestationVideo.hasMany(Projet, {as : "projet", foreignKey : "pro_id"});

module.exports = Projet ; 
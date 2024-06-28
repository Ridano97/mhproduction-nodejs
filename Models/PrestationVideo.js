const { Model, DataTypes } = require("sequelize");
const PrestationType = require("./PrestationType");
const sequelize = require("../Config/Sequelize");

class PrestationVideo extends Model {

}

PrestationVideo.init ({
    prest_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    }, 

    prest_description : {
        type : DataTypes.TEXT,
        allowNull : false
    },

    prest_prix : {
        type : DataTypes.DECIMAL,
        allowNull : false
    },

    prest_url_video : {
        type : DataTypes.STRING,
        allowNull :  true
    },

    prest_autorisation_public : {
        type : DataTypes.BOOLEAN,
        allowNull : true
    }, 

    pro_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "Projet",
            key : "pro_id"
        }
    }, 

    prty_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "PrestationType",
            key : "prty_id"
        }
    }

},{
    
    sequelize, 
    modelName : "PrestationVideo",
    tableName : "prestation_video",
    timestamps : false

})

PrestationVideo.belongsTo(PrestationType, {as : "prestation_types", foreignKey : "prty_id"});
PrestationType.hasMany(PrestationVideo, {as : "prestation_videos" , foreignKey : "prty_id"});


module.exports = PrestationVideo ; 
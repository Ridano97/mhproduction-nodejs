const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize")


class Administrateur extends Model {

}

Administrateur.init ({
    adm_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true ,
        primaryKey : true 
    },

    adm_email : {
        type : DataTypes.STRING,
        allowNull : false
    },

    adm_nom : {
        type : DataTypes.STRING,
        allowNull : false
    },

    adm_mdp : {
        type : DataTypes.STRING,
        allowNull : false
    }, 

    adm_telephone : {
        type : DataTypes.CHAR,
        allowNull : false
    }, 

    adm_url_logo : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, {

    sequelize, 
    modelName : 'Administrateur',
    tableName : 'Administrateur', 
    timestamps : false

})


module.exports = Administrateur ;
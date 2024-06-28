const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");
const Projet = require("./Projet");

class Entreprise extends Model {

}

Entreprise.init ({
    ent_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    }, 

    ent_nom : {
        type : DataTypes.STRING,
        allowNull : false
    }, 

    ent_mdp : {
        type : DataTypes.STRING,
        allowNull : false
    },

    ent_date_inscription : {
        type : DataTypes.DATE,
        allowNull : false
    },

    ent_logo_url : {
        type : DataTypes.STRING,
        allowNull : false
    }

}, {

    sequelize,
    modelName : 'Entreprise',
    tableName : 'Entreprise',
    timestamps : false

})

Entreprise.hasMany(Projet, {as : "projets" , foreignKey : "ent_id"})
Projet.belongsTo(Entreprise, {as : "entreprises" , foreignKey : "ent_id"});

module.exports = Entreprise ; 
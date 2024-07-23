const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");
const Projet = require("./Projet");
const bcrypt = require("bcrypt");

class Entreprise extends Model {

    async validatePassword(mdp){
        console.log(this.ent_mdp);
        return await bcrypt.compare(mdp, this.ent_mdp);
    }


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
    timestamps : false,
    hooks : {
        
        beforeCreate : async (entreprise) => {
            entreprise.ent_mdp = await bcrypt.hash(entreprise.ent_mdp, 10);
        },

        beforeUpdate : async (entreprise) => {
            if(entreprise.changed("ent_mdp")){
                entreprise.ent_mdp = await bcrypt.hash(entreprise.ent_mdp, 10);
            }
        }
    }

})

Entreprise.hasMany(Projet, {as : "projets" , foreignKey : "ent_id"});
Projet.belongsTo(Entreprise, {as : "entreprises" , foreignKey : "ent_id"});

module.exports = Entreprise ; 
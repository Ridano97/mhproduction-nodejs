const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");
const bcrypt = require("bcrypt");


class Administrateur extends Model {

    async validatePassword(mdp){
        console.log(this.adm_mdp);
        return await bcrypt.compare(mdp, this.adm_mdp);
    }


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
    timestamps : false,
    hooks : {

        beforeCreate : async (administrateur) => {
            administrateur.adm_mdp = await bcrypt.hash(administrateur.adm_mdp, 10);
        },

        beforeUpdate : async (administrateur) => {
            if(administrateur.changed("adm_mdp")){
                administrateur.adm_mdp = await bcrypt.hash(administrateur.adm_mdp, 10);
            }
        }
    }

})



module.exports = Administrateur ;
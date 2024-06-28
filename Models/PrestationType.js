const sequelize = require("../Config/Sequelize")
const { DataTypes, Model } = require("sequelize");


class PrestationType extends Model {

}

PrestationType.init ({
    prty_id : {
       type : DataTypes.INTEGER,
       autoIncrement : true,
       primaryKey : true
        
    },

    prty_label : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, {
  
    sequelize,
    modelName : "PrestationType",
    tableName : "prestation_type",
    timestamps : false
    
})

module.exports = PrestationType ; 
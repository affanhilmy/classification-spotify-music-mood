import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Dataset = db.define('dataset',{
    id:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING
    },
    artist:{
        type: DataTypes.STRING
    },
    dancebility:{
        type: DataTypes.NUMBER
    },
    tempo:{
        type: DataTypes.NUMBER
    },
    energy:{
        type: DataTypes.NUMBER
    },
    valance:{
        type: DataTypes.NUMBER
    },
    mood:{
        type: DataTypes.STRING
    }
},{
    timestamps: false,
    freezeTableName: true
});
 
export default Dataset;
import { Sequelize } from "sequelize";
 
const db = new Sequelize('mood_music', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;
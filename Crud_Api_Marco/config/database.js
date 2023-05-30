import { Sequelize } from "sequelize";

const db = new Sequelize('prestadores', 'root', '', {
    host: 'localhost',
    password: 'hbXutdy2!',
    dialect: 'mysql'
})
export default db
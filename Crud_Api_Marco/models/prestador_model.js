import { Sequelize } from "sequelize";
import db from "../config/database.js"

// const {DataTypes} = Sequelize

const Prestadores = db.define('prestador', {
    codigo_prestador: {
        type: Sequelize.INTEGER(11),
        primaryKey: true
    },
    nome_prestador: {
        type:Sequelize.STRING(200)
    },
    cpf_prestador: {
        type:Sequelize.STRING(100)
    }
},{
    timestamps: false,
    freezeTableName: true
})
export default Prestadores
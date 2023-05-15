import { Sequelize } from "sequelize";

const db = new Sequelize("awesome_db", "root", "Enoch@134",{
    host:"localhost",
    dialect:"mysql"
})

export default db
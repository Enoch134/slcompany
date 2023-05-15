import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import SequelizeStore from 'connect-session-sequelize'
import session from 'express-session';
import flash from 'express-flash';
import db from './config/Database.js';


const app = express()
app.use(express.static('./public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sessionStore = SequelizeStore(session.Store)
const store = new sessionStore({
    db:db
})

app.use(session({
    secret:process.env.SESS_SECRET = "secret",
    resave:false,
    saveUninitialized:true,
    store:store,
    cookie:{
        secure:'auto'
    }
}))


app.use(flash)

// (async() =>{
//     await db.sync()
// })()

app.use(cors())

dotenv.config()
const PORT = process.env.PORT || 2023
app.listen(PORT,(error) =>{
    error ? console.log(error):console.log(`server is running on http://localhost:${PORT}`)
})
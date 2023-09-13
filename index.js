const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./database');
require("./scr/models/Note");

const app = express()

//middleware
app.use(express.json)
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan('dev'))

// rutas
app.use(require('.router/post.router'))

//propios 
// error 404
app.use((req,res,next)=> {
    console.log ('nuevo mensaje',req.url)
    res.send('440')
})


console.log('hola mundo')

//configuracion servidor

app.listen (4000, ()=> {
    console.log ('servidor en el puerto 4000');
});
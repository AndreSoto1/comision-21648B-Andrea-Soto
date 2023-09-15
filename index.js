const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./database');
require('./scr/models/post')

const app = express()

//middleware
app.use(express.json)
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan('dev'))

// motor de plantilla
app.set('view engine', 'ejs');

//conf. carpeta views
app.set('views', __dirname + '/scr/views');

// conf. carpeta static
app.set(express.static("public"));


//configuracion servidor
app.listen(4000, () => {

    sequelize.sync({ force: false })

        .then(() =>console.log ('BD esta conectado'))
        .catch(err => console.log(err))

    console.log ('servidor en el puerto 4000')     
});
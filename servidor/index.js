const express = require('express');
const conectarDB = require('./config/db')
const config = require('./config/global');
const multipart = require('connect-multiparty');
const cors = require('cors');



const multiPartMiddelware = multipart({
    uploadDir: './imagenes'
});


const app = express();

//Conectar BD
conectarDB();

app.use(cors())

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/api/productos', require('./routes/producto'));
app.use('/api/login', require('./routes/usuario'));
app.use('/api/create-user', require('./routes/usuario'));

app.post('/api/subir', multiPartMiddelware, (req, res) => {
    res.json({
        'message': 'Fichero subido correctamente.....!!!'
    })
})



app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000')
})
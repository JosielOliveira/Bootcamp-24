const express = require('express');
const { getCollection } = require('./config/db'); // Asegúrate de que la ruta sea correcta
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
        const collection = await getCollection();
        const documento = await collection.findOne({});
        if (documento) {
            res.json(documento);
        } else {
            res.status(404).send('No se encontró ningún documento');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al conectar a la base de datos');
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
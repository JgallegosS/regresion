const express = require('express') // Importa el framework Express
const app = express() // Crea una instancia de la aplicación Express

// Heroku dinámicamente asigna un puerto
const PORT = process.env.PORT || 5000

// Sirve los archivos estáticos desde la carpeta "dist"
app.use(express.static('dist'))

// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Server started on port 5000`); // Muestra un mensaje en la consola cuando el servidor inicia
});

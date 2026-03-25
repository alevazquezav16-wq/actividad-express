const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// NUEVA RUTA
app.get('/usuario', (req, res) => {
  const usuario = {
    id: 1,
    nombre: 'Alejandro',
    rol: 'Estudiante'
  };

  res.json(usuario);
});

// Servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

const pool = require('./db');

pool.connect()
  .then(() => {
    console.log('Conexión exitosa a PostgreSQL');
  })
  .catch((err) => {
    console.error('Error de conexión', err);
  });

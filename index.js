const express = require('express');
const pool = require('./db'); // 👈 SIEMPRE ARRIBA

const app = express();

app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Ruta usuario (ya la tienes)
app.get('/usuario', (req, res) => {
  const usuario = {
    id: 1,
    nombre: 'Alejandro',
    rol: 'Estudiante'
  };

  res.json(usuario);
});

// (NUEVA RUTA)
app.get('/alumnos', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM alumno');
    res.json(resultado.rows);
  } catch (error) {
    console.error('Error al consultar alumnos:', error);
    res.status(500).json({ error: 'Error al obtener los alumnos' });
  }
});

// Conexión a PostgreSQL
pool.connect()
  .then(() => {
    console.log('Conexión exitosa a PostgreSQL');
  })
  .catch((err) => {
    console.error('Error de conexión', err);
  });

// Servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

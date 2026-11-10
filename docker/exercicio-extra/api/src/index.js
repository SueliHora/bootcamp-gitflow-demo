const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'senha123',
  database: process.env.DB_NAME || 'meubanco',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client:', err);
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Docker!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/visitas', async (req, res) => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS visitas (
        id SERIAL PRIMARY KEY,
        criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    await pool.query('INSERT INTO visitas DEFAULT VALUES;');
    const result = await pool.query('SELECT COUNT(*)::int AS total FROM visitas;');
    res.json({ total_visitas: result.rows[0].total });
  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).json({ error: 'Erro ao consultar banco de dados' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


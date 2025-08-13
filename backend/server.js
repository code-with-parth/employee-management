require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./src/db');

const employeeRoutes = require('./src/routes/employeeRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

app.use('/employees', employeeRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

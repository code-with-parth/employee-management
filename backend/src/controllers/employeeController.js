const db = require('../db');

exports.getAllEmployees = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM employees');
  res.json(rows);
};

exports.getEmployeeById = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM employees WHERE id = ?', [req.params.id]);
  res.json(rows[0]);
};

exports.createEmployee = async (req, res) => {
  const { name, email, designation, salary, date_joined } = req.body;
  try {
    await db.query(
      'INSERT INTO employees (name, email, designation, salary, date_joined) VALUES (?, ?, ?, ?, ?)',
      [name, email, designation, salary, date_joined]
    );
    res.status(201).json({ message: 'Employee added successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateEmployee = async (req, res) => {
  const { name, email, designation, salary, date_joined } = req.body;
  await db.query(
    'UPDATE employees SET name=?, email=?, designation=?, salary=?, date_joined=? WHERE id=?',
    [name, email, designation, salary, date_joined, req.params.id]
  );
  res.json({ message: 'Employee updated successfully' });
};

exports.deleteEmployee = async (req, res) => {
  await db.query('DELETE FROM employees WHERE id=?', [req.params.id]);
  res.json({ message: 'Employee deleted successfully' });
};

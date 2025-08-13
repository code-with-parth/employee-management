import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", designation: "", salary: "", date_joined: "" });

  const fetchEmployees = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/employees`);
    setEmployees(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${import.meta.env.VITE_API_URL}/employees`, form);
    setForm({ name: "", email: "", designation: "", salary: "", date_joined: "" });
    fetchEmployees();
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/employees/${id}`);
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
        <input placeholder="Designation" value={form.designation} onChange={e => setForm({ ...form, designation: e.target.value })} required />
        <input type="number" placeholder="Salary" value={form.salary} onChange={e => setForm({ ...form, salary: e.target.value })} required />
        <input type="date" value={form.date_joined} onChange={e => setForm({ ...form, date_joined: e.target.value })} required />
        <button type="submit">Add Employee</button>
      </form>

      <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Designation</th><th>Salary</th><th>Date Joined</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.designation}</td>
              <td>{emp.salary}</td>
              <td>{emp.date_joined}</td>
              <td>
                <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

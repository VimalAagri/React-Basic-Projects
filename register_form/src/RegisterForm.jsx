import React, { useState } from 'react';
import './RegisterForm.css';

function RegisterForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }
    alert(`Registered Successfully!\nName: ${formData.name}\nEmail: ${formData.email}`);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="input" />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="input" />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="input" />
        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Registration.module.css'; 

function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const endpoint = "http://localhost:3001/register";
   

    navigate("/messenger");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;

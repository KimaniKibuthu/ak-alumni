import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cohort: "",
    partnerCompany: "",
    password: "",
    confirmPassword: "",
    termsOfService: false,
  });

  const partnerCompanies = [
    "SAP SE",
    "Boehringer Ingelheim",
    "Bosch",
    "Merck KGaA",
    "B Braun",
    "BionTech",
    "Voith",
    "ODDO BHF",
    "Siemens Healthineers",
    "Bayer",
    "Volkswagen",
    // Add more companies here
  ];

  const handleChange = (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Make sure to validate form data before submitting
    // Send the form data to the server (backend) using fetch or axios
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <input name="firstName" type="text" placeholder="First Name" onChange={handleChange} required />
      <input name="lastName" type="text" placeholder="Last Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <select name="cohort" onChange={handleChange} required>
        <option value="">Select Cohort</option>
        <option value="current-fellow">Current Fellow</option>
        {[...Array(12)].map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <select name="partnerCompany" onChange={handleChange} required>
        <option value="">Select Partner Company</option>
        {partnerCompanies.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} required />
      <label>
        <input name="termsOfService" type="checkbox" onChange={handleChange} required />
        I agree to the <a href="/terms-of-service" target="_blank">Terms of Service</a>
      </label>
      <button type="submit">SignUp</button>
    </form>
  );
};

export default Register;

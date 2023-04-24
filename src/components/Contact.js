import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (!value.length) {
      setErrorMessage(`${name} is required.`);
      return;
    }
    if (name === 'email' && !validateEmail(value)) {
      setErrorMessage('Invalid email address.');
      return;
    }
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      console.log('Form submitted:', formState);
      // Implement form submission logic here, e.g. sending data to an API.
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onBlur={handleBlur} onChange={handleInputChange} value={formState.name} />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onBlur={handleBlur} onChange={handleInputChange} value={formState.email} />
        <label htmlFor="message">Message:</label>
        <textarea name="message" onBlur={handleBlur} onChange={handleInputChange} value={formState.message} />
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
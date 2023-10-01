import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("./api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data.message);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        onChange={handleChange}
      />

      <label htmlFor="Email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        required
        onChange={handleChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required onChange={handleChange} />
    </form>
  );
};

export default ContactForm;

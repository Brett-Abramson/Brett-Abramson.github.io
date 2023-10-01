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
        value={formData.name}
        required
        className="text-zinc-950"
        onChange={handleChange}
      />

      <label htmlFor="Email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={formData.email}
        required
        className="text-zinc-950"
        onChange={handleChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        required
        className="text-zinc-950"
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;

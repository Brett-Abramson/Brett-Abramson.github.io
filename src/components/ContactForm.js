import { useState } from "react";
import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("./api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
      setIsEmailSent(true)

      resetFormData();
    } else {
      console.error("Error sending email")
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      email:"",
      message:"",
    })
  }

  return (
    <div className="border border-slate-500 rounded-xl p-2 mb-4 lg:w-2/3 lg:m-auto lg:px-4">
      {isEmailSent ? (
        <><p>Email successfully Sent!</p>
        <a href="3" onClick={() => setIsEmailSent(false)}>Send another message?</a></>

         ) : (/* <h3 className="md:m-2">
        If you would like to get in touch, please feel free to send me a
        message.
      </h3> */
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          required
          className="text-zinc-950 rounded"
          onChange={handleChange}
        />

        <label htmlFor="Email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          required
          className="text-zinc-950 rounded"
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          required
          className="text-zinc-950 rounded"
          onChange={handleChange}
        />
        <Button type="submit" buttonText="Send" customClassname="w-1/3 m-auto my-3 mt-4 border border-zinc-50 hover:scale-105" />
      </form>)}
    </div>

  );
};

export default ContactForm;

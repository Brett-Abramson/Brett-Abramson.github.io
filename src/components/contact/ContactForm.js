import { useState } from "react";
import Button from "../shared/Button";
import { InputField } from "../shared/InputField";
import { TextAreaField } from "../shared/TextAreaField";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);

        setIsEmailSent(true);
        setIsLoading(false);
        resetFormData();
      } else {
        console.error("Error sending email");
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="mb-4 rounded-xl border border-slate-500 bg-zinc-900 p-2 lg:m-auto lg:w-4/5 lg:px-4">
      {isEmailSent ? (
        <div className="flex flex-col items-center">
          <p>Email successfully Sent!</p>
          <button
            href="#"
            onClick={() => {
              setIsEmailSent(false);
              // setIsLoading(false);
            }}
          >
            Send another message?
          </button>
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className="flex flex-col items-center">
              <p>Sending... Please wait.</p>
              <div className="h-12 w-12 animate-spin rounded-full border-2 border-t-white border-opacity-30" />
            </div>
          ) : (
            <>
              {isError ? (
                <div className="flex flex-col items-center">
                  <p>Error Sending Email</p>
                  <button
                    onClick={() => {
                      setIsError(false);
                    }}
                  >
                    Please Try Again.
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="m-auto flex w-4/5 flex-col gap-1 pt-2 lg:pt-4"
                >
                  <InputField
                    id="name"
                    label="Name:"
                    value={formData.name}
                    placeholder="Your Name"
                    autoComplete="name"
                    handleChange={handleChange}
                  />
                  <InputField
                    id="email"
                    label="Email:"
                    value={formData.email}
                    placeholder="Yourname@yourEmail.com"
                    autoComplete="email"
                    handleChange={handleChange}
                  />
                  <label htmlFor="message">Message:</label>
                  <TextAreaField
                    id="message"
                    name="message"
                    value={formData.message}
                    placeholder="Compose your message"
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    buttonText="Send"
                    customClassname="w-1/3 m-auto my-3 mt-4 border border-zinc-50 hover:scale-105"
                  />
                </form>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ContactForm;

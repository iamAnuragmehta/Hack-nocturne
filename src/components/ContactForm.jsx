import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Please wait...");

    try {
      // Parallel submissions
      const [response1, response2] = await Promise.all([
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            access_key: "0888cf07-b58e-4c0d-a345-08e35043e59a",
            subject: "New Submission from Web3Forms - Primary",
          }),
        }),
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            access_key: "85d739bf-a1bf-4d42-a002-9dbb0c97844f",
            subject: "New Submission from Web3Forms - Tertiary",
          }),
        }),
      ]);

      const json1 = await response1.json();
      const json2 = await response2.json();

      if (response1.status === 200 && response2.status === 200) {
        setStatus("Message sent successfully! 😊");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
        });
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("Something went wrong!");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <div className="form-header">
          <h1>Contact Us</h1>
          <p>Fill up the form below to send us a message.</p>
        </div>

        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button id="button" type="submit">
              Send Message
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export { ContactForm };

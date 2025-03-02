import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-blue-400 to-green-400"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Contact Me</h2>
        <p className="text-gray-200 mb-6">
          I'd love to hear from you! Feel free to reach out through the form
          below.
        </p>
        <form
          className="space-y-4 bg-white bg-opacity-80 p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-white">{status}</p>}
      </div>
    </section>
  );
}

export default Contact;

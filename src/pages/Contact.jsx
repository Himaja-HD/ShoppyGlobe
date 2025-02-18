import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    feedback: "",
  });

  const [isFormValid, setIsFormValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.feedback) {
      setIsFormValid(false);
      return;
    }
    console.log("Form submitted:", formData);
    setFormData({ name: "", phone: "", email: "", feedback: "" });
    setIsFormValid(true);
  };

  return (
    <div className="w-1/2 mx-auto p-6 bg-gray-700 shadow-xl rounded-lg mt-3">
      <h2 className="text-center text-4xl font-extrabold text-white mb-6">Feedback</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Phone"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="feedback" className="text-sm font-semibold text-gray-700 mb-2">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Feedback"
            rows="4"
            required
          />
        </div>

        {!isFormValid && (
          <div className="text-red-500 text-sm mb-4">Please fill out all fields.</div>
        )}

        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
          disabled={!formData.name || !formData.phone || !formData.email || !formData.feedback}
        >
         Feedback
        </button>
      </form>
    </div>
  );
};

export default Contact;

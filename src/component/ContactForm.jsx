"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
    });
  };

  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4532FC]">
            Contact us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-lg mx-auto">
            Speak with our team to see how we can help your business.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="block w-full rounded-full border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-[#4532FC] focus:ring-1 focus:ring-[#4532FC] sm:text-sm"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="block w-full rounded-full border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-[#4532FC] focus:ring-1 focus:ring-[#4532FC] sm:text-sm"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your best contact number"
              className="block w-full rounded-full border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-[#4532FC] focus:ring-1 focus:ring-[#4532FC] sm:text-sm"
            />
          </div>

          <div>
            <textarea
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Business or company name"
              rows="3"
              className="block w-full rounded-2xl border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-[#4532FC] focus:ring-1 focus:ring-[#4532FC] sm:text-sm"
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-20 border border-transparent rounded-2xl shadow-sm text-base font-medium text-white bg-[#4532FC] hover:bg-[#3a2ad9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4532FC]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        "service_bi6543o", 
        "template_yomrypp",
        formData,
        "yz9XPrrewSoy2uKmo" 
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="flex flex-col items-center justify-center py-20 px-6 relative z-50"
      id="contact"
      style={{ pointerEvents: "auto" }}
      onPointerDownCapture={(e) => e.stopPropagation()} 
    >

      <h1 className="text-[40px] z-0 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Contact
      </h1>

      <div className="w-full max-w-lg flex flex-col gap-6">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full p-6 rounded-lg shadow-md bg-[#09061a] border border-[#7042f861]"
        >
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="w-full">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-4 py-2 rounded-full text-white transition ${
              isLoading
                ? "bg-[#0300145e] cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-80"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

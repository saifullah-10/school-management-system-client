// pages/contact.tsx
"use client";
import Linear from "@/components/animation/courses/Linear";
import LinearWave from "@/components/animation/courses/LinearWave";
import Rotate from "@/components/animation/courses/Rotate";
import RotateFast from "@/components/animation/courses/RotateFast";
import emailjs from "@emailjs/browser";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Adjust to match the exact recipient field name expected by your template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      user_email: "talha0184999@gmail.com", // Ensure this field matches the template key
    };

    emailjs
      .send(
        "service_vrtj17b",
        "template_cbtkdxp",
        templateParams,
        "i0rtKar2iBnc2tElA"
      )
      .then(() => {
        // console.log("Email sent successfully:", result.text);
        setResponseMessage(
          "Thank you for contacting us! We have received your message."
        );
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setResponseMessage("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <div className="min-h-screen">
      {/* heading */}
      <div className="bg-[url('/assets/images/breadcrumb.jpg')] py-5 lg:py-10 relative">
        <h1 className="text-4xl lg:text-6xl text-center font-Montserrat font-bold">
          Contact Us
        </h1>
        <div className="flex justify-center font-Poppins font-bold ">

            Home
      
          <span className="text-[#704fe6] px-2">/</span>
          <p>Contact Us</p>
        </div>
        <Linear />
        <LinearWave />
        <Rotate />
        <RotateFast />
      </div>

      {/* Contact Form and Info */}
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-20 w-[98%] sm:w-[90%] max-w-screen-2xl mx-auto pt-2">
        {/* Left Side: Contact Info */}
        <div className="relative shadow-lg  rounded-xl px-8 py-16 w-full lg:w-1/3 bg-gray-50">
          {/* triangle */}
          <div className="absolute bottom-0 left-0 w-0 h-0 border-t-[100px] border-t-transparent border-l-[200px] rounded-xl border-l-indigo-500 border-b-0 border-r-0"></div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-500 mb-6">
            Reach out with any questions, concerns, or suggestions.
          </p>
          <div className="rounded-xl p-2 bg-white">
            <div className="space-y-4">
              {/* Address Section */}
              <div className="flex items-center space-x-2">
                <div className="p-3 bg-[#FFEFEC] rounded-full">
                  <FaMapMarkerAlt className="text-[#FC6441] size-3" />
                </div>
                <div>
                  <p className="font-semibold">Our Address</p>
                  <p>1564 Goosetown Drive</p>
                  <p>Matthews, NC 28105</p>
                </div>
              </div>

              {/* Hours of Operation Section */}
              <div className="flex items-center space-x-2">
                <div className="p-3 bg-[#FFEFEC] rounded-full">
                  <FaClock className="text-[#FC6441] size-3" />
                </div>
                <div>
                  <p className="font-semibold">Hours Of Operation</p>
                  <p>Mon - Fri: 9.00am to 5.00pm</p>
                  <p>[2nd Sat Holiday]</p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="flex items-center space-x-2">
                <div className="p-3 bg-[#FFEFEC] rounded-full">
                  <FaPhoneAlt className="text-[#FC6441] size-3" />
                </div>
                <div>
                  <p className="font-semibold">Contact</p>
                  <p>+99-35895-4565</p>
                  <p className="flex items-center space-x-2">
                    <span>supportyou@info.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-gray-50 p-6 rounded-xl w-full max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-500 ">Name*</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-500 ">Email Address*</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-500 ">Phone*</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-500 ">Subject*</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-500 ">Message</label>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-[40%] bg-[#7768E5] rounded-[4px] text-white p-3 hover:bg-[#7768E5] transition duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
          {/* Display response message after form submission */}
          {responseMessage && (
            <p className="mt-4 text-green-500 font-semibold">
              {responseMessage}
            </p>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex flex-wrap justify-center items-center bg-[#141321] text-white mt-5">
        {/* Address Section */}
        <div className="flex items-center space-x-4 pr-[60px] py-10">
          <div className="p-2 border border-black lg:border-white rounded-full bg-[#211F25]">
            <FaMapMarkerAlt className="text-xl text-[#ffffff]" />
          </div>
          <div>
            <h3 className="text-xs text-[#7062f5] font-semibold">Address:</h3>
            <p className="text-lg">238, Arimantab, Moska</p>
          </div>
        </div>

        {/* Phone Section */}
        <div className="flex items-center space-x-4 border-l border-black lg:border-white py-10 px-14">
          <div className="p-2 border border-white rounded-full bg-[#211F25]">
            <FaPhoneAlt className="text-xl text-[#ffffff]" />
          </div>
          <div>
            <h3 className="text-xs text-[#7062f5] font-semibold">Phone:</h3>
            <p className="text-lg">(00)8757845682</p>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-center space-x-4 border-l border-black lg:border-white pl-[60px] pr-[80px] py-10">
          <div className="p-2 border border-white rounded-full bg-[#211F25]">
            <FaEnvelope className="text-xl text-[#ffffff]" />
          </div>
          <div>
            <h3 className="text-xs text-indigo-500 font-semibold">Email:</h3>
            <p className="text-lg">info@edunity.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

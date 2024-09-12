"use client";
import React, { useState } from "react";

// Define the type for the form data
interface FormData {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  idNo: string;
  bloodGroup: string;
  religion: string;
  email: string;
  className: string;
  section: string;
  address: string;
  phone: string;
  bio: string;
  file: File | null;
}

const AddTeacherForm = () => {
  // Initialize form state with proper types
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    idNo: "",
    bloodGroup: "",
    religion: "",
    email: "",
    className: "",
    section: "",
    address: "",
    phone: "",
    bio: "",
    file: null,
  });

  // Handle input changes for text, select, and textarea fields
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file changes with proper typing
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files ? e.target.files[0] : null,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Log form data (or handle it as needed)
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      idNo: "",
      bloodGroup: "",
      religion: "",
      email: "",
      className: "",
      section: "",
      address: "",
      phone: "",
      bio: "",
      file: null,
    });
  };

  return (
    <div className="overflow-x-auto p-8 px-6 bg-[#F0F1F3]">
      <h1 className="text-lg font-semibold pb-2">Teachers</h1>
      <h1 className="text-sm pb-6">
        Home <span className="text-[#FAB301]"> {">"} Add Teachers</span>
      </h1>

      <form
        className="bg-white shadow-md rounded p-6 text-gray-500"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4 text-black">Add New Teacher</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4 text-sm">
          {/* First Name */}
          <div>
            <label className=" text-gray-500">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-3 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Last Name */}
          <div>
            <label className=" text-gray-500">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-3 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Gender */}
          <div>
            <label className=" text-gray-500">Gender *</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full px-3 py-3 rounded focus:outline-none bg-[#F0F1F3] text-gray-400"
              required
            >
              <option value="">Please Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* Date of Birth */}
          <div>
            <label className=" text-gray-500">Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full px-3 py-3 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* ID No */}
          <div>
            <label className=" text-gray-500">ID No</label>
            <input
              type="text"
              name="idNo"
              value={formData.idNo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rou3ded focus:outline-none bg-[#F0F1F3]"
            />
          </div>
          {/* Blood Group */}
          <div>
            <label className=" text-gray-500">Blood Group *</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border rounded focus:outline-none bg-[#F0F1F3] text-gray-400"
              required
            >
              <option value="">Please Select Group</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
            </select>
          </div>
          {/* Religion */}
          <div>
            <label className=" text-gray-500">Religion *</label>
            <select
              name="religion"
              value={formData.religion}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border rounded focus:outline-none bg-[#F0F1F3] text-gray-400"
              required
            >
              <option value="">Please Select Religion</option>
              <option value="islam">Islam</option>
              <option value="hinduism">Hinduism</option>
              <option value="christianity">Christianity</option>
            </select>
          </div>
          {/* E-Mail */}
          <div>
            <label className=" text-gray-500">E-Mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border rounded focus:outline-none bg-[#F0F1F3]"
            />
          </div>
          {/* Class */}
          <div>
            <label className=" text-gray-500">Class *</label>
            <select
              name="className"
              value={formData.className}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border rounded focus:outline-none bg-[#F0F1F3] text-gray-400"
              required
            >
              <option value="">Please Select Class</option>
              <option value="class 1">Class 1</option>
              <option value="class 2">Class 2</option>
              {/* Add more class options as necessary */}
            </select>
          </div>
          {/* Section */}
          <div>
            <label className=" text-gray-500">Section *</label>
            <select
              name="section"
              value={formData.section}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border rounded focus:outline-none text-gray-400 bg-[#F0F1F3]"
              required
            >
              <option className="" value="">
                Please Select Section
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>
          {/* Address */}
          <div>
            <label className=" text-gray-500">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border rounded focus:outline-none bg-[#F0F1F3]"
            />
          </div>
          {/* Phone */}
          <div>
            <label className=" text-gray-500">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border rounded focus:outline-none bg-[#F0F1F3]"
            />
          </div>
          {/* Short BIO */}
          <div className="md:col-span-2">
            <label className=" text-gray-500">Short BIO</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="w-full px-3 py-10 border rounded focus:outline-none bg-[#F0F1F3]"
            ></textarea>
          </div>
          {/* Upload Student Photo */}
          <div>
            <label className=" text-gray-500">
              Upload Student Photo{" "}
              <span className="text-gray-400">(150px X 150px)</span>
            </label>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="w-full px-3 py-3 border rounded focus:outline-none text-gray-400 bg-[#F0F1F3]"
            />
          </div>
        </div>

        <div className="flex justify-start gap-3">
          <button
            type="submit"
            className="bg-[#FFAE01] hover:bg-yellow-600 text-white px-12 py-[14px] rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-[#042954] hover:bg-blue-800 text-white px-12 py-[14px] rounded"
          >
            Reset
          </button>
        </div>
      </form>
      <p className="pt-10 text-xs">
        © Copyrights akkhor 2019. All rights reserved.{" "}
      </p>
    </div>
  );
};

export default AddTeacherForm;

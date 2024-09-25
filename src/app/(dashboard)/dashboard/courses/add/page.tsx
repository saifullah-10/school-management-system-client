"use client";
import axiosInstance from "@/lib/axios";
import React, { useState } from "react";

// Define the type for the form data
interface CourseData {
  course_code: string;
  title: string;
  author: string;
  category: string;
  overview: string;
  objectives: string[];
  modules: string[];
  prerequisites: string;
  duration: string;
  schedule: string;
  format: string;
  language: string;
  certification: string;
  course_image: File | null;
  course_name: string;
  description: string;
  lessons: number;
  credit_hours: string;
  enrollment: number;
  instructor: string;
  price: string;
}

const AddCourseForm = () => {
  const [disableBtn, setDisableBtn]=  useState<boolean>(true)
  // Initialize form state with proper types
  const [formData, setFormData] = useState<CourseData>({
    course_code: "",
    title: "",
    author: "",
    category: "",
    overview: "",
    objectives: [],
    modules: [],
    prerequisites: "",
    duration: "",
    schedule: "",
    format: "",
    language: "",
    certification: "",
    course_image: null,
    course_name: "",
    description: "",
    lessons: 0,
    credit_hours: "",
    enrollment: 0,
    instructor: "",
    price: "",
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
const file = e.target.files ? e.target.files[0] : "";
const formData= new FormData();
formData.append("image",file)

fetch("https://api.imgbb.com/1/upload?key=96ff04967d839a087ec86d576873248e", {
  method: "POST",
  body: formData
}).then(res=>res.json()).then(data=> {
const url =  data.data.url
  if(url){
    setDisableBtn(false);
    setFormData((pre)=> ({...pre, course_image: url}))
  }
}).catch(err=> console.log(err))


 
  };

  // Handle array changes (objectives and modules)
  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'objectives' | 'modules') => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [field]: value.split(',').map(item => item.trim()), 
    }));
  };

  // Handle form submission
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
try{
const res = await axiosInstance.post("/add-course", formData)

if(res.data.insertedId){
  console.log("succcessfully inserted")
}

}catch(err){
  console.log(err)
}
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      course_code: "",
      title: "",
      author: "",
      category: "",
      overview: "",
      objectives: [],
      modules: [],
      prerequisites: "",
      duration: "",
      schedule: "",
      format: "",
      language: "",
      certification: "",
      course_image: null,
      course_name: "",
      description: "",
      lessons: 0,
      credit_hours: "",
      enrollment: 0,
      instructor: "",
      price: "",
    });
  };

  return (
    <div className="overflow-x-auto p-8 px-6 bg-[#F0F1F3]">
      <h1 className="text-lg font-semibold pb-2">Courses</h1>
      <h1 className="text-sm pb-6">
        Home <span className="text-[#FAB301]"> {">"} Add Course</span>
      </h1>

      <form
        className="bg-white shadow-md rounded p-6 text-gray-500"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4 text-black">Add New Course</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4 text-sm">
          {/* Course Code */}
          <div>
            <label className="text-gray-500">Course Code *</label>
            <input
              type="text"
              name="course_code"
              value={formData.course_code}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Title */}
          <div>
            <label className="text-gray-500">Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Author */}
          <div>
            <label className="text-gray-500">Author *</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Category */}
          <div>
            <label className="text-gray-500">Category *</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Overview */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <label className="text-gray-500">Overview *</label>
            <textarea
              name="overview"
              value={formData.overview}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none bg-[#F0F1F3]"
              required
            ></textarea>
          </div>
          {/* Objectives */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <label className="text-gray-500">Objectives (comma-separated)</label>
            <input
              type="text"
              name="objectives"
              value={formData.objectives.join(', ')}
              onChange={(e) => handleArrayChange(e, 'objectives')}
              className="w-full px-3 py-2 border rounded focus:outline-none bg-[#F0F1F3]"
            />
          </div>
          {/* Modules */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <label className="text-gray-500">Modules (comma-separated)</label>
            <input
              type="text"
              name="modules"
              value={formData.modules.join(', ')}
              onChange={(e) => handleArrayChange(e, 'modules')}
              className="w-full px-3 py-2 border rounded focus:outline-none bg-[#F0F1F3]"
            />
          </div>
          {/* Prerequisites */}
          <div>
            <label className="text-gray-500">Prerequisites *</label>
            <input
              type="text"
              name="prerequisites"
              value={formData.prerequisites}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3] "
              required
            />
          </div>
          {/* Duration */}
          <div>
            <label className="text-gray-500">Duration *</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Schedule */}
          <div>
            <label className="text-gray-500">Schedule *</label>
            <input
              type="text"
              name="schedule"
              value={formData.schedule}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Format */}
          <div>
            <label className="text-gray-500">Format *</label>
            <input
              type="text"
              name="format"
              value={formData.format}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Language */}
          <div className="col-span-1 md:col-span-2">
            <label className="text-gray-500">Language *</label>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Certification */}
          <div className="col-span-1 md:col-span-2">
            <label className="text-gray-500">Certification *</label>
            <input
              type="text"
              name="certification"
              value={formData.certification}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Course Image */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <label className="text-gray-500">
              Course Image{" "}
              <span className="text-gray-400">(Recommended size: 250px x 250px)</span>
            </label>
            <input
              type="file"
              name="course_image"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded focus:outline-none text-gray-400 bg-[#F0F1F3]"
            />
          </div>
          {/* Course Name */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <label className="text-gray-500">Course Name *</label>
            <input
              type="text"
              name="course_name"
              value={formData.course_name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <label className="text-gray-500">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none bg-[#F0F1F3]"
              required
            ></textarea>
          </div>
          {/* Lessons */}
          <div>
            <label className="text-gray-500">Lessons *</label>
            <input
              type="number"
              name="lessons"
              value={formData.lessons}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Credit Hours */}
          <div className="col-span-1 md:col-span-2">
            <label className="text-gray-500">Credit Hours *</label>
            <input
              type="text"
              name="credit_hours"
              value={formData.credit_hours}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Enrollment */}
          <div>
            <label className="text-gray-500">Enrollment *</label>
            <input
              type="number"
              name="enrollment"
              value={formData.enrollment}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Instructor */}
          <div className="col-span-1 md:col-span-2">
            <label className="text-gray-500">Instructor *</label>
            <input
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
          {/* Price */}
          <div className="col-span-1 md:col-span-2">
            <label className="text-gray-500">Price *</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded focus:outline-none bg-[#F0F1F3]"
              required
            />
          </div>
        </div>

        <div className="flex justify-start gap-3 mt-6">
          <button
            type="submit"
            className={`bg-[#FFAE01] hover:bg-yellow-600 text-white px-12 py-3 rounded ${disableBtn ? "cursor-not-allowed bg-gray-300 hover:bg-gray-300":""}`}
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-[#042954] hover:bg-blue-800 text-white px-12 py-3 rounded"
          >
            Reset
          </button>
        </div>
      </form>
      <p className="pt-10 text-xs">
        © Copyrights Starlight University 2024. All rights reserved.
      </p>
    </div>
  );
};

export default AddCourseForm;

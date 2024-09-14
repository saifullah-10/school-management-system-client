"use client";
import React from "react";
import Image from "next/image";
import { useAuth } from "@/contextProvider/ContextProvider";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col lg:flex-row gap-5 items-center justify-center p-6 bg-gray-50 ">
      {/* Left Side: Profile Image */}
      <div className="lg:w-1/3 w-auto flex justify-center mb-6 lg:mb-0">
        <Image
          src={user?.photoUrl || "/default-profile.png"}
          alt={`${user?.username || "User"}'s Profile Picture`}
          width={256}
          height={256}
          className="rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
      </div>

      {/* Right Side: Profile Info */}
      <div className="lg:w-2/3 w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center lg:text-left mb-4">
          Profile Info
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Profile details */}
          <div>
            <p className="text-lg capitalize">
              <strong>Name: </strong>
              {user?.username || "N/A"}
            </p>
            <p className="text-lg">
              <strong>Email: </strong>
              {user?.email || "N/A"}
            </p>
            <p className="text-lg">
              <strong>Phone Number: </strong>
              {user?.phoneNumber || "N/A"}
            </p>
            <p className="text-lg">
              <strong>Date of Birth: </strong>
              {user?.dateOfBirth || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-lg capitalize">
              <strong>Gender: </strong>
              {user?.gender || "N/A"}
            </p>
            <p className="text-lg capitalize">
              <strong>Father Name: </strong>
              {user?.fatherName || "N/A"}
            </p>
            <p className="text-lg capitalize">
              <strong>Mother Name: </strong>
              {user?.motherName || "N/A"}
            </p>
            <p className="text-lg">
              <strong>Blood Group: </strong>
              {user?.bloodGroup || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-lg">
              <strong>Address: </strong>
              {user?.address || "N/A"}
            </p>
            <p className="text-lg capitalize">
              <strong>Role: </strong>
              {user?.role || "N/A"}
            </p>
            <p className="text-lg">
              <strong>Class ID: </strong>
              {user?.classId || "N/A"}
            </p>
            <p className="text-lg">
              <strong>Status: </strong>
              {user?.status || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


"use client";
import React, { useState } from "react";
import { Checkbox, Table } from "flowbite-react"; // Ensure both components are imported
import Dropdown from "@/components/dashboard/teacherRelatedComponents/Dropdown";


interface Student {
    id: number;
    photo: string;
    name: string;
    gender: string;
    class: number;
    subject: string;
    section: string;
    address: string;
    phone: string;
    email: string;
}

function Tab() {
    const [searchID, setSearchID] = useState<string>("");
    const [searchName, setSearchName] = useState<string>("");
    const [searchPhone, setSearchPhone] = useState<string>("");

    const students: Student[] = [
        {
            id: 1,
            photo: "https://randomuser.me/api/portraits/men/1.jpg",
            name: "John Doe",
            gender: "Male",
            class: 10,
            subject: "Mathematics",
            section: "A",
            address: "123 Main St, Springfield",
            phone: "+1-234-567-8901",
            email: "john.doe@example.com"
        },
        {
            id: 2,
            photo: "https://randomuser.me/api/portraits/men/2.jpg",
            name: "James Smith",
            gender: "Male",
            class: 11,
            subject: "Physics",
            section: "B",
            address: "456 Oak St, Springfield",
            phone: "+1-234-567-8902",
            email: "james.smith@example.com"
        },
        {
            id: 3,
            photo: "https://randomuser.me/api/portraits/men/3.jpg",
            name: "Mike Johnson",
            gender: "Male",
            class: 9,
            subject: "Chemistry",
            section: "A",
            address: "789 Pine St, Springfield",
            phone: "+1-234-567-8903",
            email: "mike.johnson@example.com"
        },
        {
            id: 4,
            photo: "https://randomuser.me/api/portraits/men/4.jpg",
            name: "Ethan Davis",
            gender: "Male",
            class: 10,
            subject: "Biology",
            section: "B",
            address: "321 Birch St, Springfield",
            phone: "+1-234-567-8904",
            email: "ethan.davis@example.com"
        },
        {
            id: 5,
            photo: "https://randomuser.me/api/portraits/men/5.jpg",
            name: "Chris Brown",
            gender: "Male",
            class: 12,
            subject: "English",
            section: "A",
            address: "654 Maple St, Springfield",
            phone: "+1-234-567-8905",
            email: "chris.brown@example.com"
        },
        {
            id: 6,
            photo: "https://randomuser.me/api/portraits/men/6.jpg",
            name: "David Wilson",
            gender: "Male",
            class: 11,
            subject: "History",
            section: "C",
            address: "987 Elm St, Springfield",
            phone: "+1-234-567-8906",
            email: "david.wilson@example.com"
        },
        {
            id: 7,
            photo: "https://randomuser.me/api/portraits/men/7.jpg",
            name: "Noah Martinez",
            gender: "Male",
            class: 9,
            subject: "Geography",
            section: "B",
            address: "111 Willow St, Springfield",
            phone: "+1-234-567-8907",
            email: "noah.martinez@example.com"
        },
        {
            id: 8,
            photo: "https://randomuser.me/api/portraits/men/8.jpg",
            name: "Jacob Anderson",
            gender: "Male",
            class: 12,
            subject: "Physics",
            section: "A",
            address: "222 Cedar St, Springfield",
            phone: "+1-234-567-8908",
            email: "jacob.anderson@example.com"
        },
        {
            id: 9,
            photo: "https://randomuser.me/api/portraits/men/9.jpg",
            name: "James Garcia",
            gender: "Male",
            class: 10,
            subject: "Mathematics",
            section: "C",
            address: "333 Cherry St, Springfield",
            phone: "+1-234-567-8909",
            email: "james.garcia@example.com"
        },
        {
            id: 10,
            photo: "https://randomuser.me/api/portraits/men/10.jpg",
            name: "Liam White",
            gender: "Male",
            class: 11,
            subject: "Chemistry",
            section: "B",
            address: "444 Aspen St, Springfield",
            phone: "+1-234-567-8910",
            email: "liam.white@example.com"
        },
        {
            id: 11,
            photo: "https://randomuser.me/api/portraits/men/11.jpg",
            name: "Daniel Lee",
            gender: "Male",
            class: 12,
            subject: "Biology",
            section: "A",
            address: "555 Redwood St, Springfield",
            phone: "+1-234-567-8911",
            email: "daniel.lee@example.com"
        },
        {
            id: 12,
            photo: "https://randomuser.me/api/portraits/men/12.jpg",
            name: "William Harris",
            gender: "Male",
            class: 10,
            subject: "English",
            section: "C",
            address: "666 Cypress St, Springfield",
            phone: "+1-234-567-8912",
            email: "william.harris@example.com"
        },
        {
            id: 13,
            photo: "https://randomuser.me/api/portraits/men/13.jpg",
            name: "Noah Thompson",
            gender: "Male",
            class: 9,
            subject: "History",
            section: "B",
            address: "777 Sycamore St, Springfield",
            phone: "+1-234-567-8913",
            email: "noah.thompson@example.com"
        },
        {
            id: 14,
            photo: "https://randomuser.me/api/portraits/men/14.jpg",
            name: "Oliver Clark",
            gender: "Male",
            class: 12,
            subject: "Geography",
            section: "A",
            address: "888 Poplar St, Springfield",
            phone: "+1-234-567-8914",
            email: "oliver.clark@example.com"
        },
        {
            id: 15,
            photo: "https://randomuser.me/api/portraits/men/15.jpg",
            name: "Ethan Young",
            gender: "Male",
            class: 10,
            subject: "Mathematics",
            section: "C",
            address: "999 Magnolia St, Springfield",
            phone: "+1-234-567-8915",
            email: "ethan.young@example.com"
        },
        {
            id: 16,
            photo: "https://randomuser.me/api/portraits/men/16.jpg",
            name: "Henry Robinson",
            gender: "Male",
            class: 11,
            subject: "Physics",
            section: "B",
            address: "111 Oakridge St, Springfield",
            phone: "+1-234-567-8916",
            email: "henry.robinson@example.com"
        },
        {
            id: 17,
            photo: "https://randomuser.me/api/portraits/men/17.jpg",
            name: "Liam King",
            gender: "Male",
            class: 9,
            subject: "Chemistry",
            section: "A",
            address: "222 Willowbrook St, Springfield",
            phone: "+1-234-567-8917",
            email: "liam.king@example.com"
        },
        {
            id: 18,
            photo: "https://randomuser.me/api/portraits/men/18.jpg",
            name: "Lucas Wright",
            gender: "Male",
            class: 12,
            subject: "Biology",
            section: "C",
            address: "333 Lakeside St, Springfield",
            phone: "+1-234-567-8918",
            email: "lucas.wright@example.com"
        },
        {
            id: 19,
            photo: "https://randomuser.me/api/portraits/men/19.jpg",
            name: "Benjamin Scott",
            gender: "Male",
            class: 10,
            subject: "English",
            section: "B",
            address: "444 Highland St, Springfield",
            phone: "+1-234-567-8919",
            email: "benjamin.scott@example.com"
        },
        {
            id: 20,
            photo: "https://randomuser.me/api/portraits/men/20.jpg",
            name: "Nathan Baker",
            gender: "Male",
            class: 11,
            subject: "History",
            section: "A",
            address: "555 Valley St, Springfield",
            phone: "+1-234-567-8920",
            email: "nathan.baker@example.com"
        }
    ];

    // Filter students based on search inputs
    const filteredStudents = students.filter((st) => {
        return (
            st.id.toString().includes(searchID) &&
            st.name.toLowerCase().includes(searchName.toLowerCase()) &&
            st.phone.includes(searchPhone)
        );
    });

    // Pagination state
    const [currentPage, setCurrentPage] = useState<number>(1);

    return (
        <div className="overflow-x-auto p-8 px-6 bg-[#F0F1F3]">
            <h1 className="text-lg font-semibold pb-2">Teachers</h1>
            <h1 className="text-sm pb-6">
                Home <span className="text-[#FAB301]"> {'>'} All Teachers</span>
            </h1>

            {/* Search Inputs */}
            <div className="flex space-x-4 mb-4">
                <input
                    type="text"
                    className="border p-2 w-1/3"
                    placeholder="Search by ID..."
                    value={searchID}
                    onChange={(e) => setSearchID(e.target.value)}
                />
                <input
                    type="text"
                    className="border p-2 w-1/3"
                    placeholder="Search by Name..."
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
                <input
                    type="text"
                    className="border p-2 w-1/3"
                    placeholder="Search by Phone..."
                    value={searchPhone}
                    onChange={(e) => setSearchPhone(e.target.value)}
                />
            </div>

            <div className="border p-6 bg-[#FFFFFF] overflow-x-scroll">
                <h1 className="text-xl font-semibold pb-2">All Teachers Data</h1>
                <Table hoverable className="border">
                    <Table.Head className="border-b">
                        <Table.HeadCell className="p-4 2xl:text-center 2xl:pl-8">
                            <Checkbox />
                        </Table.HeadCell>
                        <Table.HeadCell className="text-start">ID</Table.HeadCell>
                        <Table.HeadCell className="text-start">Photo</Table.HeadCell>
                        <Table.HeadCell className="text-start pr-[100px]">Name</Table.HeadCell>
                        <Table.HeadCell className="text-start">Gender</Table.HeadCell>
                        <Table.HeadCell className="text-start">Class</Table.HeadCell>
                        <Table.HeadCell className="text-start">Subject</Table.HeadCell>
                        <Table.HeadCell className="text-start">Section</Table.HeadCell>
                        <Table.HeadCell className="text-start pr-[172px]">Address</Table.HeadCell>
                        <Table.HeadCell className="text-start pr-[100px]">Phone</Table.HeadCell>
                        <Table.HeadCell className="text-start">E-mail</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only text-start pr-[10px]">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {filteredStudents.length > 0 ? (
                            filteredStudents.slice(0,7).map((st) => (
                                <Table.Row
                                    key={st.id}
                                    className={`${st.id % 2 !== 0 ? "bg-[#FFFFFF]" : "bg-[#F9F9F9]"
                                        } dark:border-gray-700 dark:bg-gray-800`}
                                >
                                    <Table.Cell className="p-4 2xl:pl-12">
                                        <Checkbox />
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {st.id}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <img
                                            src={st.photo}
                                            alt="Student"
                                            className="w-10 h-10 rounded-full"
                                        />
                                    </Table.Cell>
                                    <Table.Cell>{st.name}</Table.Cell>
                                    <Table.Cell>{st.gender}</Table.Cell>
                                    <Table.Cell>{st.class}</Table.Cell>
                                    <Table.Cell>{st.subject}</Table.Cell>
                                    <Table.Cell>{st.section}</Table.Cell>
                                    <Table.Cell>{st.address}</Table.Cell>
                                    <Table.Cell>{st.phone}</Table.Cell>
                                    <Table.Cell>{st.email}</Table.Cell>
                                    <Table.Cell>
                                        <div
                                            className="text-gray-400 hover:underline dark:text-cyan-500 flex flex-col justify-center"
                                        >
                                            <Dropdown />
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan={12} className="text-center text-gray-500">
                                    No data found
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>

                {/* Pagination */}
                <div className="w-full flex justify-end">
                    <div className="flex items-center pt-3">
                        <button
                            className={`px-4 py-2 mr-2 border rounded ${currentPage === 1
                                    ? "bg-gray-200 cursor-not-allowed"
                                    : "bg-gray-100 hover:bg-gray-200 cursor-pointer"
                                }`}
                        >
                            Previous
                        </button>
                        <button
                            className={`px-4 py-2 mr-2 border rounded ${currentPage === 1
                                    ? "bg-orange-500 text-white border-orange-500"
                                    : "bg-gray-100 hover:bg-gray-200"
                                }`}
                        >
                            1
                        </button>
                        <button
                            className={`px-4 py-2 border rounded ${currentPage === 2
                                    ? "bg-orange-500 text-white border-orange-500"
                                    : "bg-gray-100 hover:bg-gray-200"
                                }`}
                        >
                            2
                        </button>
                        <button
                            className={`px-4 py-2 ml-2 border rounded ${currentPage === 2
                                    ? "bg-gray-200 cursor-not-allowed"
                                    : "bg-gray-100 hover:bg-gray-200 cursor-pointer"
                                }`}
                        >
                            Next
                        </button>
                    </div>
                </div>
                {/* Pagination ends */}
            </div>

            <p className="pt-10 text-xs">© Copyrights akkhor 2019. All rights reserved. </p>
        </div>
    );
}

export default Tab;

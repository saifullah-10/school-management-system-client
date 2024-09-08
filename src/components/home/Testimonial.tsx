'use client'
import React, { useState } from 'react';
import 'swiper/swiper-bundle.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, FreeMode } from 'swiper/modules';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { MdOutlineStarRate, MdPeople } from 'react-icons/md';

// Define types for stats and testimonials
type Stat = {
    id: number;
    icon: JSX.Element;
    number: string;
    title: string;
};

type Testimonial = {
    name: string;
    program: string;
    year: string;
    testimonial: string;
};

export default function Testimonial() {
    const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);

    return (
        <div className="relative mt-48 pb-20 bg-[#F9F8FF]">
            {/* stats */}

<div className='w- xl:mx-auto'>
                    <div className="absolute xl:top-[-95px] xl:border xl:mx-auto xl:max-w-[1936px] xl:w-[60%] xl:left-[20%]
                    lg:top-[-95px] lg:border lg:w-[70%] lg:left-[15%]
                    md:border md:top-[-90px] md:left-[9%] md:w-[82%] md:rounded-full
                    sm:py-4 sm:top-[-90px] sm:border sm:w-full 
                    w-full top-[-130px] my-10 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto max-w-[1310px] py-2 ">
                        <div className="max-w-7xl mx-auto flex justify-around items-center gap-2 flex-wrap">
                            {stats.map((stat) => (
                                <div
                                    key={stat.id}
                                    className="flex items-center gap-2 text-center w-[120px] justify-center"
                                >
                                    <div className="text-[10px] sm:text-xl lg:text-lg 2xl:text-[26px] 2xl:leading-snug  bg-white rounded-full p-1 sm:p-2 xl:p-4">
                                        {stat.icon}
                                    </div>
                                    <div className="pr-4">
                                        <h3 className="text-sm sm:text-2xl lg:text-lg 2xl:text-[26px] 2xl:leading-snug  font-bold text-gray-800">
                                            {stat.number}
                                        </h3>
                                        <p className="text-[8px] sm:text-[8px] lg:text-[8px] 2xl:text-[20px] 2xl:leading-snug  font-medium text-gray-600">
                                            {stat.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
</div>


            <div className="flex justify-center pt-36">
                <h1 className="text-center text-lg font-normal text-[#704fe6] bg-[#E9E2FF] border-2 w-fit px-6 py-1 rounded-[5px]">
                    Testimonials
                </h1>
            </div>
            <div className="flex justify-center text-[44px] font-bold py-1 mt-5 mb-16">
                <div className="flex flex-col w-[90%] mx-auto items-center justify-center">
                    <h1>Creating A Community Of</h1>
                    <h1>Life Long Learners.</h1>
                </div>
            </div>

            <div className="w-[75%] max-w-[1490px] mx-auto">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        type: 'bullets',
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        900: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.name}>
                            <div className="mb-16">
                                <div className="relative bg-blue-50 border border-[#00000050] rounded-xl p-8 w-full shadow-sm max-w-[390px] mx-auto">
                                    <div className="absolute text-8xl text-blue-200 top-[-10px] left-3">“</div>
                                    <p className="text-black mb-20 sm:mb-4 min-h-[220px] text-xl">
                                        {item.testimonial}
                                    </p>
                                    <h4 className="text-xl font-extrabold text-blue-900 pt-5">{item.name}</h4>
                                    <p className="text-md text-blue-600">{item.program}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

// Array of stats
const stats: Stat[] = [
    {
        id: 1,
        icon: <FaUserGraduate size={30} className="text-blue-600" />,
        number: '3k+',
        title: 'Successfully Trained',
    },
    {
        id: 2,
        icon: <FaChalkboardTeacher size={30} className="text-blue-600" />,
        number: '15k+',
        title: 'Classes Completed',
    },
    {
        id: 3,
        icon: <MdOutlineStarRate size={30} className="text-blue-600" />,
        number: '97k+',
        title: 'Satisfaction Rate',
    },
    {
        id: 4,
        icon: <MdPeople size={30} className="text-blue-600" />,
        number: '120k+',
        title: 'Students Community',
    },
];

const testimonials: Testimonial[] = [
    {
        name: 'Emily Davis',
        program: 'BSc in Computer Science',
        year: '3rd Year',
        testimonial:
            'The university has provided me with endless opportunities to grow both academically and personally. The faculty is incredibly supportive, and the hands-on projects have really helped me prepare for my future career.',
    },
    {
        name: 'James Thompson',
        program: 'MBA in Business Administration',
        year: '1st Year',
        testimonial:
            "I chose this university for its reputation in business education, and I couldn't be happier. The case studies and networking opportunities are invaluable, and I've already connected with some great mentors.",
    },
    {
        name: 'Sophia Patel',
        program: 'BA in Psychology',
        year: '2nd Year',
        testimonial:
            'The courses here are both challenging and rewarding. The professors genuinely care about our success, and the student community is like a second family. I feel like I\'m being well-prepared for my future career in mental health.',
    },
    {
        name: 'Alexander Brooks',
        program: 'MSc in Data Science',
        year: 'Final Year',
        testimonial:
            'The university’s state-of-the-art labs and resources have allowed me to dive deep into data science. The practical experience I’ve gained through internships arranged by the university has been invaluable.',
    },
    {
        name: 'Olivia Martin',
        program: 'BFA in Fine Arts',
        year: '3rd Year',
        testimonial:
            'The creative freedom and guidance I get from my professors are incredible. I’ve had the opportunity to showcase my work in exhibitions, and I feel like my artistic skills have grown tremendously since I started.',
    },
    {
        name: 'Daniel Nguyen',
        program: 'BEng in Mechanical Engineering',
        year: '4th Year',
        testimonial:
            "The university's engineering program is top-notch. The professors are industry experts, and the lab facilities are outstanding. The practical experience I've gained here will definitely give me a head start in my career.",
    },
    {
        name: 'Grace Chen',
        program: 'BA in International Relations',
        year: '2nd Year',
        testimonial:
            "The diversity and inclusiveness of the campus are amazing. I've met students from all around the world, and the courses are always relevant to global issues. This has truly broadened my perspective.",
    },
    {
        name: 'Liam Carter',
        program: 'BSc in Environmental Science',
        year: '3rd Year',
        testimonial:
            'What I love most about my program is how we’re encouraged to apply what we learn to real-world issues. From field trips to research projects, I\'ve gained hands-on experience that will be crucial for my career in sustainability.',
    },
    {
        name: 'Mia Rodriguez',
        program: 'BEd in Elementary Education',
        year: 'Final Year',
        testimonial:
            'The education program has been fantastic. My student teaching experience was transformative, and the guidance I received from my mentors made me feel confident about stepping into my own classroom.',
    },
    {
        name: 'Ethan Wright',
        program: 'BSc in Biotechnology',
        year: '4th Year',
        testimonial:
            'The research opportunities available here have really shaped my academic journey. I\'ve been able to work alongside brilliant faculty members on cutting-edge projects, and it\'s been an incredibly rewarding experience.',
    },
];

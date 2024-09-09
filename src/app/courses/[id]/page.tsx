import Linear from '@/components/animation/courses/Linear';
import LinearWave from '@/components/animation/courses/LinearWave';
import Rotate from '@/components/animation/courses/Rotate';
import RotateFast from '@/components/animation/courses/RotateFast';
import { BsPersonSquare } from "react-icons/bs";
import Link from 'next/link';
import React from 'react';
import { IoBookmarkOutline } from 'react-icons/io5';
import { RiShareForwardLine } from "react-icons/ri";

interface Params {
    id: string;
}

const CourseDetailspage = ({ params }: { params: Params }) => {
    return (
        <div className='font-Poppins'>
            {/* heading */}
            <div className="bg-[url('/assets/images/breadcrumb.jpg')] py-20 relative">
                <h1 className="text-6xl text-center font-Montserrat font-bold">
                    Course
                </h1>
                <div className="flex justify-center font-Poppins font-bold py-4">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span className="text-[#704fe6] px-2">/</span>
                    <Link href="/courses" className="hover:underline">
                        Courses
                    </Link>
                    <span className="text-[#704fe6] px-2">/</span>
                    <p>{params.id}</p>
                </div>
                <Linear />
                <LinearWave />
                <Rotate />
                <RotateFast />
            </div>

            {/* main */}
            <div className='lg:flex justify-center w-11/12 mx-auto'>
                <div>
                    <h1 className='text-4xl md:text-5xl font-Montserrat font-bold py-7'>IT Statistics Data Science And Business Analysis</h1>

                    <div className='md:flex justify-between'>
                        <div className='text-gray-500 flex gap-2 items-center'>
                            <BsPersonSquare />
                            <p>by <span className='text-black font-Montserrat font-semibold'>Admin</span> </p>
                            <p>categories <span className='text-black font-Montserrat font-semibold'>Data Analysis</span> </p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <button> <IoBookmarkOutline /> </button>
                            <p>Whishlist</p>
                            <RiShareForwardLine />
                            <p>Share</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#7768e5] text-white w-fit p-3 my-5 rounded-[5px]'>
                    Course Info
                </div>

                <div>
                    <h2>Course Overview</h2>
                    <p>
                        IT Statistics Data Science And Business Analysis is a comprehensive course designed to equip you with the essential skills and knowledge required to excel in the fields of data science, statistics, and business analysis. This course covers a wide range of topics, from fundamental statistical concepts to advanced data analysis techniques, ensuring you are well-prepared to tackle real-world business challenges.
                    </p>

                    <h2>Course Objectives</h2>
                    By the end of this course, you will be able to:

                    Understand and apply fundamental statistical concepts.
                    Perform data analysis using various statistical tools and techniques.
                    Utilize data science methodologies to extract insights from data.
                    Implement business analysis strategies to inform decision-making.
                    Develop and interpret data visualizations to communicate findings effectively.
                    Course Modules
                    Module 1: Introduction to Statistics
                    Basic Concepts: Mean, median, mode, variance, standard deviation.
                    Probability Theory: Basic probability, conditional probability, Bayes’ theorem.
                    Distributions: Normal distribution, binomial distribution, Poisson distribution.
                    Module 2: Data Collection and Cleaning
                    Data Sources: Primary and secondary data sources.
                    Data Cleaning: Handling missing data, outlier detection, data normalization.
                    Data Wrangling: Techniques for transforming raw data into a usable format.
                    Module 3: Exploratory Data Analysis (EDA)
                    Descriptive Statistics: Summarizing and describing data.
                    Data Visualization: Creating charts, graphs, and plots using tools like Matplotlib and Seaborn.
                    Correlation and Causation: Identifying relationships between variables.
                    Module 4: Inferential Statistics
                    Hypothesis Testing: Null and alternative hypotheses, p-values, t-tests, chi-square tests.
                    Confidence Intervals: Constructing and interpreting confidence intervals.
                    ANOVA: Analysis of variance for comparing multiple groups.
                    Module 5: Regression Analysis
                    Linear Regression: Simple and multiple linear regression models.
                    Logistic Regression: Binary classification problems.
                    Advanced Regression Techniques: Polynomial regression, ridge regression, lasso regression.
                    Module 6: Data Science Fundamentals
                    Introduction to Data Science: Overview of data science and its applications.
                    Machine Learning Basics: Supervised vs. unsupervised learning, common algorithms.
                    Model Evaluation: Metrics for evaluating model performance.
                    Module 7: Business Analysis Techniques
                    SWOT Analysis: Identifying strengths, weaknesses, opportunities, and threats.
                    PEST Analysis: Analyzing political, economic, social, and technological factors.
                    Business Modeling: Creating models to simulate business scenarios.
                    Module 8: Capstone Project
                    Real-World Application: Apply the skills and knowledge gained to a real-world business problem.
                    Project Presentation: Present your findings and recommendations to a panel of experts.
                    Course Features
                    Interactive Learning: Engage with interactive lessons, quizzes, and hands-on exercises.
                    Expert Instructors: Learn from industry experts with extensive experience in data science and business analysis.
                    Flexible Schedule: Study at your own pace with a flexible learning schedule.
                    Career Support: Access to career resources, including resume reviews and job placement assistance.
                    Who Should Enroll?
                    This course is ideal for:

                    Aspiring data scientists and business analysts.
                    Professionals looking to enhance their data analysis skills.
                    Individuals seeking to transition into the field of data science.
                    Business professionals aiming to make data-driven decisions.
                    Prerequisites
                    Basic understanding of mathematics and statistics.
                    Familiarity with programming concepts (preferably Python).
                    No prior experience in data science or business analysis is required.
                    Certification
                    Upon successful completion of the course, you will receive a certificate of completion, which you can add to your LinkedIn profile, resume, or CV to showcase your new skills and knowledge.
                </div>
            </div>
        </div>
    );
};

export default CourseDetailspage;
import Linear from '@/components/animation/courses/Linear';
import LinearWave from '@/components/animation/courses/LinearWave';
import Rotate from '@/components/animation/courses/Rotate';
import RotateFast from '@/components/animation/courses/RotateFast';
import Link from 'next/link';
import React from 'react';

interface Params {
    id: string;
}

const CourseDetailspage = ({ params }: { params: Params }) => {
    return (
        <div>
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
        </div>
    );
};

export default CourseDetailspage;
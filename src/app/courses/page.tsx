import Linear from "@/components/animation/courses/Linear";
import LinearWave from "@/components/animation/courses/LinearWave";
import Rotate from "@/components/animation/courses/Rotate";
import RotateFast from "@/components/animation/courses/RotateFast";

const page = () => {
    return (
        <div className="bg-[url('/assets/images/breadcrumb.jpg')] py-40 relative">
            <h1 className="text-6xl text-center font-Montserrat font-bold">All Courses</h1>
            <Linear/>
            <LinearWave/>
            <Rotate/>
            <RotateFast/>
        </div>
    );
};

export default page;
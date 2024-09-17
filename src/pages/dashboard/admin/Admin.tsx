import Calendar from "@/components/dashboard/adminPath/Calendar";
import EarningChart from "@/components/dashboard/adminPath/EarningChart";
import GenderPieChart from "@/components/dashboard/adminPath/GenderPieChart";
import NoticeBoard from "@/components/dashboard/adminPath/NoticeBoard";
import Status from "@/components/dashboard/adminPath/Status";
import TrafficDashboard from "@/components/dashboard/adminPath/TrafficDashboard";
import Tanstack from "@/utils/Tanstack";


const Admin = () => {
    return (
        <div>
            <Status></Status>
            <div className="flex flex-wrap gap-3 lg:flex-row justify-between ">
                <div className="flex-1 max-w-[1000px] bg-white p-5 rounded-xl shadow-lg mt-5 flex-shrink-0">
                    <EarningChart />
                </div>
                <GenderPieChart />
            </div>
            <div className="flex flex-wrap justify-between my-5 gap-5 lg:gap-0">
                <div className="bg-white w-full lg:w-[32%] h-auto lg:h-[400px] rounded-xl shadow-lg p-4 flex-shrink-0">
                    <h3 className="text-2xl font-bold ml-4">Event Calendar</h3>
                    <Calendar />
                </div>

                <div className="bg-white w-full lg:w-[32%] h-auto lg:h-[400px] rounded-xl shadow-lg p-4 flex-shrink-0">
                    <TrafficDashboard />
                </div>

                <div className="bg-white w-full lg:w-[32%] h-auto lg:h-[400px] rounded-xl shadow-lg p-4 flex-shrink-0">
                    <Tanstack>
                    <NoticeBoard />
                    </Tanstack>
                </div>
            </div>



        </div>
    );
};

export default Admin;
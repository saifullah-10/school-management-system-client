import Calendar from "@/components/dashboard/adminPath/Calendar";
import EarningChart from "@/components/dashboard/adminPath/EarningChart";
import GenderPieChart from "@/components/dashboard/adminPath/GenderPieChart";
import NoticeBoard from "@/components/dashboard/adminPath/NoticeBoard";
import Status from "@/components/dashboard/adminPath/Status";
import TrafficDashboard from "@/components/dashboard/adminPath/TrafficDashboard";


const Admin = () => {
    return (
        <div>
            <Status></Status>
            <div className="flex gap-5 flex-col lg:flex-row justify-between ">
                <div className="flex-1 max-w-[1000px] bg-white p-5 rounded-xl shadow-lg mt-5 flex-shrink-0">
                    <EarningChart />
                </div>
                <GenderPieChart />
            </div>
            <div className="flex flex-wrap justify-between my-5">
                <div className="bg-white h-96 rounded-xl shadow-lg p-4">
                    <h3 className="text-2xl font-bold ml-4">Event Calendar</h3>
                    <Calendar />
                </div>
                <div className="w-fit min-w-[350px] lg:w-1/3">
                    <TrafficDashboard />
                </div>
                <div className="w-fit lg:w-[30%]">
                    <NoticeBoard />
                </div>

            </div>

        </div>
    );
};

export default Admin;
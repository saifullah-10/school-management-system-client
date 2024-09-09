import EarningChart from "@/components/dashboard/adminPath/EarningChart";
import GenderPieChart from "@/components/dashboard/adminPath/GenderPieChart";
import Status from "@/components/dashboard/adminPath/Status";


const Admin = () => {
    return (
        <div>
            <Status></Status>
            <div className="flex gap-5 flex-col lg:flex-row justify-between ">
                <div className="flex-1 max-w-[1000px] bg-white p-5 rounded-xl shadow-lg mt-5 flex-shrink-0">
                    <EarningChart />
                </div>
                <div className="flex-1 max-w-[400px] bg-white p-5 rounded-xl shadow-lg mt-5 flex-shrink-0">
                    <GenderPieChart />
                </div>
            </div>

        </div>
    );
};

export default Admin;
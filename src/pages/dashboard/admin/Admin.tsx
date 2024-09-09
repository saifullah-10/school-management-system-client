import { FaPeopleGroup, } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import EarningChart from "@/components/dashboard/adminPath/EarningChart";
import GenderPieChart from "@/components/dashboard/adminPath/GenderPieChart";


const Admin = () => {
    return (
        <div>
            <div className="flex flex-wrap  gap-5 justify-between ">
                <div className="max-w-[250px] w-full h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between ">
                    {/* <FaPeopleRobbery /> */}
                    <FaPeopleGroup className="text-6xl text-[#3CB878] bg-[#D1F3E0] rounded-full p-2" />
                    <div className="text-end">
                        <h1 className="text-slate-500">Students</h1>
                        <p className="text-xl font-bold">15000</p>
                    </div>
                </div>
                <div className="max-w-[250px] w-full h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between ">
                    <MdGroups className="text-6xl text-[#3F7AFC] bg-[#E1F1FF] rounded-full p-2" />
                    <div className="text-end">
                        <h1 className="text-slate-500">Teachers</h1>
                        <p className="text-xl font-bold">310</p>
                    </div>
                </div>
                <div className="max-w-[250px] w-full h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between ">
                    <MdGroups className="text-6xl text-[#3F7AFC] bg-[#E1F1FF] rounded-full p-2" />
                    <div className="text-end">
                        <h1 className="text-slate-500">Teachers</h1>
                        <p className="text-xl font-bold">310</p>
                    </div>
                </div>
                <div className="max-w-[250px] w-full h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between ">
                    <div className="text-[#FF0000] bg-[#FFEAEA] rounded-full p-2">
                        <FaMoneyBillAlt className="text-5xl " />
                    </div>
                    <div className="text-end">
                        <h1 className="text-slate-500">Earings</h1>
                        <p className="text-xl font-bold">$193600</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between ">
                <div className="flex-1 max-w-[550px] bg-white p-5 rounded-xl shadow-lg mt-5 flex-shrink-0">
                    <div className="mb-5">
                        <h1 className="text-2xl font-semibold">Earnings</h1>
                        <div className="flex gap-7 mt-2">
                            <div>
                                <h1 className="flex items-center gap-2"><div className="w-4 h-4 bg-[#4CAF50]  rounded-full"></div> Total Earnings</h1>
                                <p className="text-center">$51000</p>
                            </div>
                            <div>
                                <h1 className="flex items-center gap-2"><div className="w-4 h-4 bg-[#F44336]  rounded-full"></div> Total Expenses</h1>
                                <p className="text-center">$21000</p>
                            </div>
                        </div>
                    </div>
                    <EarningChart />
                </div>
                <div className="flex-1 max-w-[550px] bg-white p-5 rounded-xl shadow-lg mt-5 flex-shrink-0">
                    <GenderPieChart />
                </div>
            </div>

        </div>
    );
};

export default Admin;
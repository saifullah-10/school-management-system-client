"use client";
import Preloader from "@/components/animation/preloader/Preloader";
import { useAuth } from "@/contextProvider/ContextProvider";
import Admin from "@/pages/dashboard/admin/Admin";
import StudentDashboard from "@/pages/dashboard/student/StudentDashboard";
import TeacherDashboard from "@/pages/dashboard/teacher/TeacherDashboard";

const Dashboard = () => {
  const auth = useAuth();
  if (auth === null) {
    return <div><Preloader/></div>;
  }
  const { user } = auth;

  // console.log(user, " user from main");

  if (!user) {
    return <div><Preloader/></div>;
  }

  return (
    <div>
      {/* <Admin />
      <StudentDashboard />
      <TeacherDashboard /> */}

      {user?.role === "admin" && <Admin></Admin>}
      {user?.role === "student" && <StudentDashboard></StudentDashboard>}
      {user?.role === "teacher" && <TeacherDashboard></TeacherDashboard>}
    </div>
  );
};

export default Dashboard;

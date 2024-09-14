"use client";
import {
  ContextProvider,
  useAuthFromContext,
} from "@/contextProvider/ContextProvider";
import Admin from "@/pages/dashboard/admin/Admin";
import StudentDashboard from "@/pages/dashboard/student/StudentDashboard";
import TeacherDashboard from "@/pages/dashboard/teacher/TeacherDashboard";

const Dashboard = () => {
  const { user } = useAuthFromContext();

  return (
    <div>
      <ContextProvider>
        {user?.role === "admin" && <Admin></Admin>}
        {user?.role === "student" && <StudentDashboard></StudentDashboard>}
        {user?.role === "teacher" && <TeacherDashboard></TeacherDashboard>}
      </ContextProvider>
    </div>
  );
};

export default Dashboard;

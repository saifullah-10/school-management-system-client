import Admin from "@/pages/dashboard/admin/Admin";
import StudentDashboard from "@/pages/dashboard/student/StudentDashboard";
import TeacherDashboard from "@/pages/dashboard/teacher/TeacherDashboard";

const Dashboard = () => {
  return (
    <div>
      <Admin></Admin>
      <StudentDashboard></StudentDashboard>
      <TeacherDashboard></TeacherDashboard>
    </div>
  );
};

export default Dashboard;

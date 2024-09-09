import Admin from "@/pages/dashboard/admin/Admin";
import PrivateRoute from "@/privateRoute/PrivateRoute";

const Dashboard = () => {
  return (
    <PrivateRoute>
      <div>
        <Admin></Admin>
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;

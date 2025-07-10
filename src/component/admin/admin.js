import SideBar from "./SideBar";
import "./Admin.scss";
const Admin = (props) => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar />
      </div>

      <div className="admin-content">
        <h1>Admin Dashboard</h1>
      </div>
    </div>
  );
};
export default Admin;

import SideBar from "./SideBar";
import "./Admin.scss";
import { Outlet } from "react-router-dom";
const Admin = (props) => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar />
      </div>

      <div className="admin-content">
        <Outlet />

        {/* <h1>Admin Dashboard</h1>
        <div className="admin-header">header-admin</div>
        <div className="admin-body">header-content</div> */}
      </div>
    </div>
  );
};
export default Admin;

import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaChartPie,
  FaChartLine,
  FaBook,
  FaCalendar,
  FaChartBar,
} from "react-icons/fa";
import { FaReact } from "react-icons/fa";
const SideBar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="sidebar">
      <Sidebar style={{ height: "100vh" }} collapsed={collapsed}>
        <div className="sidebar-header">
          <div className="logo-container">
            <FaReact className="logo-icon" />
            {!collapsed && <span className="logo-text">React Admin</span>}
          </div>
          <button className="toggle-button" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <Menu>
          <MenuItem icon={<FaBook />} component={<Link to="/admin" />}>
            {" "}
            DashBoard{" "}
          </MenuItem>
          <SubMenu label="Features" icon={<FaChartBar />}>
            <MenuItem
              icon={<FaChartPie />}
              component={<Link to="/admin/ManageUser" />}
            >
              {" "}
              Quản lí user{" "}
            </MenuItem>
            <MenuItem icon={<FaChartLine />}> Quản lí bài quiz</MenuItem>
            <MenuItem icon={<FaChartLine />}> Quản lí câu hỏi</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default SideBar;

import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
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
          <SubMenu label="Charts" icon={<FaChartBar />}>
            <MenuItem icon={<FaChartPie />}> Pie charts </MenuItem>
            <MenuItem icon={<FaChartLine />}> Line charts </MenuItem>
          </SubMenu>
          <MenuItem icon={<FaBook />}> Documentation </MenuItem>
          <MenuItem icon={<FaCalendar />}> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default SideBar;

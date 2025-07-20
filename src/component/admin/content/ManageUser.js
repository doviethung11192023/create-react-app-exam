import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./tableUser";
const ManageUser = (props) => {
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);
  return (
    <div className="manage-user-container">
      <div className="manage-user-title">
        <h2>Quản lí người dùng</h2>
      </div>
      <div className="manage-user-content">
        <p>Danh sách người dùng sẽ được hiển thị ở đây.</p>
        <div>
          <button
            className="btn btn-primary"
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
            onClick={() => setShowCreateUserModal(true)}
          >
            <FcPlus />
            Thêm người dùng
          </button>
        </div>
        <div className="table-user">
          <TableUser />
        </div>
      </div>
      <ModalCreateUser
        show={showCreateUserModal}
        setShow={setShowCreateUserModal}
      />
    </div>
  );
};
export default ManageUser;

import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="manage-user-title">
        <h2>Quản lí người dùng</h2>
      </div>
      <div className="manage-user-content">
        <p>Danh sách người dùng sẽ được hiển thị ở đây.</p>
        <div>
          <button>Thêm người dùng</button>
        </div>
        <div>table user</div>
      </div>
      <ModalCreateUser />
    </div>
  );
};
export default ManageUser;

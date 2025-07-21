import { useState, useEffect } from "react";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./tableUser";
import { getALLUser } from "../../../service/ApiService";
import { toast } from "react-toastify";
import { Modal } from "bootstrap";
const ManageUser = (props) => {
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);
  const [showUpdateUserModal, setShowUpdateUserModal] = useState(false);
  const [listUser, setListUser] = useState([
    {
      id: 10,
      username: "0764814822",
      email: "hung@gmail.com",
      role: "User",
      image: "",
    },
    {
      id: 9,
      username: "0764814822",
      email: "hr@gmail.com",
      role: "User",
      image: "",
    },
  ]);
  const [dataUser, setDataUser] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const Data = await getALLUser();
    if (Data && Data.EC === 0) {
      setListUser(Data.DT);
      toast.success(Data.EM);
    }
  };
  const handleUpdateUser = (user) => {
    setDataUser(user);
    setShowUpdateUserModal(true);
  };
  const resetUpdateUser = () => {
    setDataUser({});
    setShowUpdateUserModal(false);
  };
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
          <TableUser listUser={listUser} handleUpdateUser={handleUpdateUser} />
        </div>
      </div>
      <ModalCreateUser
        show={showCreateUserModal}
        setShow={setShowCreateUserModal}
        fetchData={fetchData}
      />
      <ModalUpdateUser
        show={showUpdateUserModal}
        setShow={setShowUpdateUserModal}
        dataUser={dataUser}
        resetUpdateUser={resetUpdateUser}
        fetchData={fetchData}
      />
    </div>
  );
};
export default ManageUser;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DeleteUser } from "../../../service/ApiService";
import { toast } from "react-toastify";

const ModalDeleteUser = (props) => {
  const { show, setShow } = props;
  console.log("props:", props.dataUser);
  const handleClose = () => setShow(false);
  const handleDeleteUser = async () => {
    let Data = await DeleteUser(props.dataUser.id);
    console.log("response 11: ", Data);
    if (Data && Data.EC === 0) {
      toast.success(Data.EM);
      handleClose();
      if (props.fetchData) {
        await props.fetchData();
      }
    }
    if (Data && Data.EC !== 0) {
      toast.error(Data.EM);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this user{" "}
          <b>{props.dataUser.email}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDeleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;

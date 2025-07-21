import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { PostCreateUser } from "../../../service/ApiService";
import _ from "lodash";
const ModalUpdateUser = (props) => {
  const { show, setShow } = props;
  //const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("User");
    setImage(null);
    setImagePreview(null);
    props.resetUpdateUser();
  };
  //const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("User");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  useEffect(() => {
    if (props.dataUser) {
      setEmail(props.dataUser.email || "");
      setPassword(props.dataUser.password || "");
      setUsername(props.dataUser.username || "");
      setRole(props.dataUser.role || "User");
      setImage(props.dataUser.image || null);
      if (props.dataUser.image) {
        setImagePreview(`data:image/png;base64,${props.dataUser.image}`);
      }
    }
  }, [props.dataUser]);
  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    setImagePreview(URL.createObjectURL(file));
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      console.log("file: ", file);
      setImage(URL.createObjectURL(file));
    } else {
      //setImagePreview(null);
    }
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmitModal = async () => {
    //alert("Submit form");
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Email is not valid");
      return;
    }
    if (!password || !username) {
      toast.error("Please fill in all fields");
      return;
    }
    console.log("image: ", image);

    let Data = await PostCreateUser(email, password, username, role, image);
    console.log("response: ", Data);
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
      <Button variant="primary" onClick={() => setShow(true)}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        className="modal-create-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option selected>User</option>
                <option>Admin</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="label-image label-upload" htmlFor="inputImage">
                <FcPlus />
                Upload image
              </label>{" "}
              <input
                type="file"
                className="form-control"
                id="inputImage"
                accept="image/*"
                onChange={(event) => handleUploadImage(event)}
                hidden
              />
              <div className="col-md-12 img-preview">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" />
                ) : (
                  <span>Preview Image</span>
                )}
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitModal()}>
            save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateUser;

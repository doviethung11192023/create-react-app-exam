import axios from "../utils/axiosCusTom";
const PostCreateUser = async (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  console.log("data: ", data);
  return await axios.post("api/v1/participant", data);
};
const getALLUser = () => {
  return axios.get("api/v1/participant/all");
};
const PutUpdateUser = async (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  console.log("image test put:", image);
  return await axios.put("api/v1/participant", data);
};
const DeleteUser = async (id) => {
  return await axios.delete("api/v1/participant", { data: { id: id } });
};
export { PostCreateUser, getALLUser, PutUpdateUser, DeleteUser };

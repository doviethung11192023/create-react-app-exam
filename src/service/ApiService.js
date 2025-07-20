import axios from "../utils/axiosCusTom";
const PostCreateUser = async (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("image", image);
  console.log("data: ", data);
  return await axios.post("api/v1/participant", data);
};
const getALLUser = () => {
  return axios.get("api/v1/participant/all");
};
export { PostCreateUser, getALLUser };

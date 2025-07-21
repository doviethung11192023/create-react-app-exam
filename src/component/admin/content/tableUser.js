const TableUser = (props) => {
  const { listUser } = props;
  return (
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {listUser && listUser.length > 0 ? (
          listUser.map((user, index) => {
            return (
              <tr key={`user-${index + 1}`}>
                <td scope="row">{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-success">View</button>
                  <button
                    className="btn btn-primary mx-3"
                    onClick={() => props.handleUpdateUser(user)}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })
        ) : (
          <td>not found data</td>
        )}
      </tbody>
    </table>
  );
};
export default TableUser;

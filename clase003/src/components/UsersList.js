import PropTypes from "prop-types";
import { Col, Table } from "react-bootstrap";
const UsersList = ({ users }) => {
  console.log(users);
  return (
    <Col md={6} className="table-data">
      <Table bordered hover>
        <thead>
          <tr>
            <th># </th>
            <th>Nombre</th>
            <th>Edad</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {users?.length > 0 &&
            users.map(({ id, name, age }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>✏️</td>
                <td>❌</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Col>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      age: PropTypes.number,
    }).isRequired
  ),
};

export default UsersList;

import { Link } from "react-router-dom";
import { IndividualUser } from "./IndividualUser";
import "../App.css";
export const ShowUser = ({
  user,
  setUser,
  users,
  DeleteUserDB,
  UpdateUserDB,
}) => {
  return (
    <>
      <Link to="/signup" className="LinktoButton">
        INSERT TO DATABASE
      </Link>
      <div className="scrolltable">
      <table>
        <caption className="headerRes">CUSTOMER DETAILS</caption>
        <tbody>
          <tr>
            <th colSpan={"2"}></th>
            <th>customer id</th>
            <th>customer name</th>
            <th>customer Email</th>
            <th>Gender</th>
            <th>contact</th>
            <th>location</th>
            <th>age</th>

          </tr>
          {users.length ? (
            users.map((customer) => (
              <tr key={customer.Customer_ID}>
              <IndividualUser
                UpdateUserDB={UpdateUserDB}
                customer={customer}
                user={user}
                setUser={setUser}
                DeleteUserDB={DeleteUserDB}
              />
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No users Found</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </>
  );
};

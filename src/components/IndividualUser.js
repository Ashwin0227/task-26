import { useState } from "react";
import Popup from "./DeletePopup";

export function IndividualUser({
  UpdateUserDB,
  user,
  setUser,
  DeleteUserDB,
  customer,
}) {
  const [rowid, setRowId] = useState("");
  const [deleteID, setDeleteID] = useState("");
  return (
    <>
      {rowid === customer.Customer_ID && (
        <>
          <td>
            <button
              className="savebtn editbtn"
              id={customer.Customer_ID}
              onClick={() => {
                UpdateUserDB(user);
                setRowId("");
              }}
            >
              save
            </button>
          </td>
          <td>
            <button
              className="editbtn"
              id={customer.Customer_ID}
              onClick={() => setRowId("")}
            >
              cancel
            </button>
          </td>
          <td>{customer.Customer_ID}</td>
          <td>
            <input
              type={"text"}
              defaultValue={customer.Customer_Name}
              onChange={(e) => {
                const Customer_Name = e.target.value;
                setUser({ ...user, Customer_Name });
              }}
            />
          </td>
          <td>
            <input
              type={"text"}
              defaultValue={customer.Customer_Email}
              onChange={(e) => {
                const Customer_Email = e.target.value;
                setUser({ ...user, Customer_Email });
              }}
            />
          </td>
          <td>
            <select
              name="gender"
              id={customer.gender}
              onChange={(e) => {
                const Gender = e.target.value;
                setUser({ ...user, Gender });
              }}
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </td>
          <td>
            <input
              type={"tel"}
              defaultValue={customer.Contact}
              onChange={(e) => {
                const Contact = e.target.value;
                setUser({ ...user, Contact });
              }}
            />
          </td>
          <td>
            <select
              id={customer.location}
              defaultValue={customer.location}
              onChange={(e) => {
                const location = e.target.value;
                setUser({ ...user, location });
              }}
            >
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="mumbai">mumbai</option>
              <option value="kerala">kerala</option>
              <option value="kolkata">kolkata</option>
              <option value="delhi">delhi</option>
              <option value="karanataka">karanataka</option>
            </select>
          </td>
          <td>
            <input
              type={"number"}
              defaultValue={customer.age}
              onChange={(e) => {
                const age = e.target.value;
                setUser({ ...user, age });
              }}
            />
          </td>
        </>
      )}
      {rowid !== customer.Customer_ID && (
        <>
          <td>
            <>
              <button
                className="editbtn delbtn"
                id={customer.Customer_ID}
                onClick={() => {
                  setDeleteID(customer.Customer_ID);
                }}
              >
                DELETE
              </button>
              <Popup
                customerID={deleteID}
                onClose={() => setDeleteID("")}
                DeleteUserDB={DeleteUserDB}
              />
            </>
          </td>
          <td>
            <button
              className="editbtn"
              id={customer.Customer_ID}
              onClick={() => {
                setUser({
                  ...user,
                  ...customer,
                });
                setRowId(customer.Customer_ID);
              }}
            >
              EDIT
            </button>
          </td>
          <td>{customer.Customer_ID}</td>
          <td>{customer.Customer_Name}</td>
          <td>{customer.Customer_Email}</td>
          <td>{customer.Gender}</td>
          <td>{customer.Contact}</td>
          <td>{customer.location}</td>
          <td>{customer.age}</td>
        </>
      )}
    </>
  );
}

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { validate } from "../validation/validation.js";
import "../App.css";
export const InsertUser = ({ setRes, users, setUsers }) => {
  const [age, setAge] = useState("20");
  const history = useHistory();
  const [user, setUser] = useState({
    Customer_ID: "",
    Customer_Name: "",
    Customer_Email: "",
    Contact: "",
    location: "Tamil Nadu",
    Password: "",
    Address: "",
    Gender: "",
    age: "20",
  });
  const [errors, setErrors] = useState({});
  setRes("");
  const InsertUserDB = async (user) => {
    const error = validate(user);
    setErrors(error);
    if (Object.keys(error).length !== 0) {
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Customer_ID: user.Customer_ID,
        Customer_Name: user.Customer_Name,
        Contact: Number(user.Contact),
        Customer_Email: user.Customer_Email,
        location: user.location,
        Password: user.Password,
        Address: user.Address,
        Gender: user.Gender,
        age: Number(user.age),
      }),
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}/user-details/signup`,
        requestOptions
      ).then((res) => res.json());
      setUsers([...users, user]);
      setRes(response.message);
      history.push("/");
    } catch (err) {
      setRes("invalid input!");
    }
  };
  return (
    <div>
      <form>
        <fieldset>
          <legend>User information</legend>
          <label>Enter id</label>
          <br />
          <input
            type="text"
            onChange={(e) => setUser({ ...user, Customer_ID: e.target.value })}
          />
          <p>{errors.id}</p>
          <label>Enter name</label>
          <br />
          <input
            type="text"
            onChange={(e) =>
              setUser({ ...user, Customer_Name: e.target.value })
            }
          />
          <p>{errors.name}</p>
          <label>Enter email</label>
          <br />
          <input
            type="email"
            onChange={(e) =>
              setUser({ ...user, Customer_Email: e.target.value })
            }
          />
          <p>{errors.email}</p>
          <label>Enter contact</label>
          <br />
          <input
            type={"tel"}
            onChange={(e) => setUser({ ...user, Contact: e.target.value })}
          />
          <p>{errors.contact}</p>
          <label>Enter password</label>
          <br />
          <input
            type="password"
            onChange={(e) => setUser({ ...user, Password: e.target.value })}
          />
          <p>{errors.password}</p>
          <label>Enter your gender</label>
          <br />
          <input
            type="radio"
            name="gender"
            onChange={() => setUser({ ...user, Gender: "M" })}
          />
          Male <br />
          <input
            type="radio"
            name="gender"
            onChange={() => setUser({ ...user, Gender: "F" })}
          />
          Female <br />
          <br />
          <label>Enter Address</label>
          <br />
          <input
            type="drop"
            onChange={(e) => setUser({ ...user, Address: e.target.value })}
          />
          <br />
          <label>Enter location</label>
          <br />
          <select
              id={user.location}
              defaultValue="Tamil Nadu"
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
          <br />
          <label>Enter Age</label>
          <br />
          <input
            type="range"
            min="3"
            max="60"
            defaultValue={20}
            onChange={(e) => {
              setAge(e.target.value);
              setUser({ ...user, age });
            }}
          />
          <span> {age}</span>
          <p>{errors.age}</p>
          <br />
        </fieldset>
      </form>

      <button className="editbtn savebtn" onClick={() => InsertUserDB(user)}>
        save
      </button>
      <button className="editbtn" onClick={() => history.push("/")}>
        Cancel
      </button>
    </div>
  );
};

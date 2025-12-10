import { useState } from "react";
// import "../custom css/TableUserDetails.css";

const TableUserDetails = () => {
  const [user, setUser] = useState({
    name: "",
    age: null,
    gender: "",
    status: false,
    country: "",
    bio: "",
  });

  function handle(e) {
    if (e.target.type === "checkbox") {
      setUser({
        ...user,
        status: e.target.checked ? true : false,
      });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  }

  return (
    <div style={{ width: "40%" }}>
      <div>
        <table className="fs-6">
          <tr>
            <th>Name</th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{user.age}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <th>Martial Status</th>
            <td>{user.status ? "married" : "not married"}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{user.country}</td>
          </tr>
          <tr>
            <th>Bio</th>
            <td>{user.bio}</td>
          </tr>
        </table>
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="form-control my-3"
          name="name"
          onChange={handle}
          value={user.name}
        />
        <input
          type="number"
          placeholder="Enter Your Age"
          className="form-control my-3"
          name="age"
          onChange={handle}
          value={user.age}
        />

        <div className="d-flex my-4">
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="male"
              onChange={handle}
              id="radioDefault1"
            />
            <label className="form-check-label" for="radioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="female"
              onChange={handle}
              id="radioDefault1"
            />
            <label className="form-check-label" for="radioDefault1">
              Female
            </label>
          </div>
        </div>

        <div className="form-check my-4">
          <input
            className="form-check-input"
            type="checkbox"
            name="status"
            onChange={handle}
            id="checkDefault"
          />
          <label className="form-check-label" for="checkDefault">
            Is Married ?
          </label>
        </div>
      </div>
      <div className="my-4">
        <label className="form-label mb-3 fw-medium" for="checkDefault">
          Select The Country
        </label>
        <select
          className="form-select "
          aria-label="Default select example"
          name="country"
          value={user.country}
          onChange={handle}
        >
          <option selected disabled>
            Select Country
          </option>
          <option value="usa">USA</option>
          <option value="india">India</option>
          <option value="russia">Russia</option>
        </select>
      </div>
      <div className="form-floating my-4">
        <textarea
          style={{ height: "100px" }}
          className="form-control"
          id="floatingTextarea"
          name="bio"
          value={user.bio}
          onChange={handle}
        ></textarea>
        <label for="floatingTextarea">Write About Yourself</label>
      </div>
    </div>
  );
};

export default TableUserDetails;

import { useState } from "react";

const UserDetails = () => {
  const [user, setUser] = useState({ fname: "ram",lname:"kumar", age: 22 });
  const [count, setCount] = useState(1);
  function handle(e){
    setUser({...user,[e.target.name]:e.target.value})
  }

  return (
    <>
      <div>
       {user.fname} {user.lname} , {user.age}
      </div>

      <div>
        <input type="text" onChange={handle} value={user.fname} name="fname" />
        <input type="text" onChange={handle} value={user.lname} name="lname" />
        <input type="text" onChange={handle} value={user.age} name="age"/>
      </div>

      {/* <div className="d-flex" style={{ gap: "5%" }}>
        <button
          type="button"
          onClick={() => {
            setUser({ ...user, name: "sam" });
          }}
          className="btn btn-primary"
        >
          Change name
        </button>
        <button
          type="button"
          onClick={() => {
            setUser({ ...user, age: 25 });
          }}
          className="btn btn-primary"
        >
          Change age
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
          className="btn btn-primary"
        >
          Add count
        </button>
      </div> */}
    </>
  );
};

export default UserDetails;

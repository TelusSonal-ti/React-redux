import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { increment, decrement, addUser, removeUser } from "./actions";

const App = () => {
  const count = useSelector((state) => state.counterReducer);
  const users = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const userRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser(userRef.current.value));
    userRef.current.value = "";
  };

  return (
    <>
      <h2 className="Header">Counter</h2>
      <button className="button1" onClick={() => dispatch(increment())}>
        +
      </button>
      {count}
      <button className="button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <h2 className="user">User</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Username"
          ref={userRef}
        />
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}
            <button onClick={() => dispatch(removeUser(index))}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;

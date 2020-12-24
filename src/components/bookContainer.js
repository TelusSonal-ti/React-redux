import React, { useState } from "react";
import { connect } from "react-redux";
import { buyBook } from "../redux";

function BookContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>No of book -{props.numberOfBook}</h1>
      <input
        type="text"
        value={number}
        on
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyBook(number)}>Buy {number} Book</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    numberOfBook: state.numberOfBook,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    buyBook: function (number) {
      dispatch(buyBook(number));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(BookContainer);

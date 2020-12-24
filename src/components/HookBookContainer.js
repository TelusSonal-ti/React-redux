import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBook } from "../redux";

function HookBookConatiner() {
  const numberOfBook = useSelector((state) => state.numberOfBook);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hook Container</h1>
      <h2> Number of Book - {numberOfBook}</h2>

      <button onClick={() => dispatch(buyBook())}>BuyBook</button>
    </div>
  );
}
export default HookBookConatiner;

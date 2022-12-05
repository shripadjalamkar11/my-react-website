import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/index.js";
export default function Component1() {
  const myState = useSelector((state) => {
    return state.changeTheNumber;
  });

  const dispatch = useDispatch();

  return (
    <div>
      component1
      <div>
        <button onClick={() => dispatch(incNumber())}>Click Me</button>
        <div>{myState}</div>
      </div>
    </div>
  );
}

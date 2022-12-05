import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/index.js";
import Component1 from "./component1.js";
store.subscribe(() => console.log(store.getState()));

console.log("🧮 🧮 🧮 🧮 🧮 🧮 🧮 ", store.getState());

store.dispatch({
  type: "INCREMENT",
  incBy: 10,
});

console.log("🧮 🧮 🧮 🧮 🧮 🧮 🧮 ", store.getState());

// store.dispatch({
//   type: "RESET",
// });

console.log("🧮 🧮 🧮 🧮 🧮 🧮 🧮 ", store.getState());

function increament() {
  console.log(">>>>");
  store.dispatch({ type: "INCREMENT", incBy: 10 });
}

function App() {
  const myState = useSelector((state) => {
    return state.changeTheNumber;
  });

  const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <div className="App">
        <Component1 />
      </div>
    </Provider>
  );
}

export default App;

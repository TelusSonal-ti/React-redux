import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import BookContainer from "./components/bookContainer";
import HookBookConatiner from "./components/HookBookContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> Wel-Come</h1>
        {<BookContainer />}
        <HookBookConatiner />
      </div>
    </Provider>
  );
}

export default App;

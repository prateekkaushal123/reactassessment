// import React from "react";
// import ReactDOM from "react-dom";
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello World from React</h1>;
//   }
// }
// ReactDOM.render(<Welcome />, document.getElementById("root"));
// 
import React from "react";
import ReactDOM from "react-dom";
import {ATMApp} from "./components/App";


ReactDOM.render(
  <React.StrictMode>
    <VaccineApp />
  </React.StrictMode>,
  document.getElementById("root")
);

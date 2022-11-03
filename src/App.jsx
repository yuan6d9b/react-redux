import React, { PureComponent } from "react";
import Calc from "./components/Calc";
import { addNumAction } from "./store/actions";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Calc></Calc>
      </div>
    );
  }
}

export default App;

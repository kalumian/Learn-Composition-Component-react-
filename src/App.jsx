import React from "react";
import "./App.css";
import List from "./List";
import RowOne from "./RowOne";
import RowThree from "./RowThree";
import RowTow from "./RowTow";

function App() {
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div className="App">
      test
      <List data={data}>
        <RowOne />
      </List>
      <List data={data}>
        <RowTow />
      </List>
      <List data={data}>
        <RowThree />
      </List>
      
    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import getData from "./API/getData";

const App = () => {

  React.useEffect(() => {
    // get Data from json-server
    getData()
  }, [])

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Number<button>up</button><button>down</button></th>
              <th>Distance</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

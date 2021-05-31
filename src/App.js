import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .post("https://api.dev.farmbook.co/mbapi/test", { fn: "nodeJS" })
      .then((res) => {
        if(datas.length < 5)
        {
          setDatas([...datas, res.data]);
        }
      
      });
  }, [datas]);

  return (
    <div className="App">
      <p>==================================================</p>
      {datas.map((item) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {item.data}
        </div>
      ))}
      <p>==================================================</p>
    </div>
  );
}

export default App;

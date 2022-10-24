import React from "react";
import ReactDOM from "react-dom/client";
import 'react-virtualized/styles.css';
import "./assets/fonts/iconfont.css";
import "./index.css";
import App from "./App";
import axios from "axios";
axios.defaults.baseURL='http://localhost:8080'
axios.interceptors.response.use(response => {
    if(response.data.status === 200){
      return response.data.body
    }
  })
window.$http = axios;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

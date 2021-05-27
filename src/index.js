import React from "react";
import ReactDOM from "react-dom";
import { render } from 'react'
import "./index.css";
import App from "./App";
export const BASE_URL = 'https://api.nasa.gov'
export const API_KEY = '/apod'
ReactDOM.render(<App />, document.getElementById("root"));

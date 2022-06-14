import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeRoute from "./routes/HomeRoute";
import NothingRoute from "./routes/NothingRoute";
import CounterRoute from "./routes/CounterRoute";
import ListAlbumsRoute from "./routes/ListAlbumsRoute";
import ListAlbumsClassRoute from "./routes/ListAlbumsClassRoute";
import ListPosts from "./routes/ListPosts";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/counter" element={<CounterRoute />} />
        <Route path="/list-albums" element={<ListAlbumsRoute />} />
        <Route path="/list-albums-class" element={<ListAlbumsClassRoute />} />
        <Route path="/list-posts" element={<ListPosts />} />
        <Route path="*" element={<NothingRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

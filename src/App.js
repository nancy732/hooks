import React from "react";
import "./App.css";
import AppFunction from "./AppFunction";
import Login from "./authentication/login";
import AppClass from "./AppClass";
import Register from "./authentication/register";
import Context from "./use Context/use_context";
import CallBack from "./Callback/CallBack";
import ScrollPosition from "./custom hooks/scrollPosition";
import Form from "./custom hooks/form";
export default function App() {
  return (
    <div>
      {/* <AppClass /> */}
      {/* <AppFunction /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Context /> */}
      {/* <CallBack /> */}
      <ScrollPosition />
      <Form />
    </div>
  );
}

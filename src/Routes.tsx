import React, { VoidFunctionComponent } from "react";
import { Routes as RouteManager, Route } from "react-router-dom";
import DefaultReactPage from "./pages/DefaultReactPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes: VoidFunctionComponent = () => {
  return (
    <RouteManager>
      <Route path="/">
        <Route index element={<DefaultReactPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </RouteManager>
  );
};

export default Routes;

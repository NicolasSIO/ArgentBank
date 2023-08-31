import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "@/pages/auth/signin/Signin";

const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<Signin />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default AuthRouter;

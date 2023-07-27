import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "@/pages/layout/Layout";
import Home from "@/pages/home/Home";
import Signin from "@/pages/signin/Signin";
import User from "@/pages/user/User";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/accueil" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/user" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

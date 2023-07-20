import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "@/pages/layout/Layout";
import Home from "./pages/home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/accueil" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

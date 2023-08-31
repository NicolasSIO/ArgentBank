import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "@/pages/layout/Layout";
import Home from "@/pages/home/Home";
import AuthRouter from "@/pages/auth/AuthRouter";
import User from "@/pages/user/User";
import AuthGuard from "@/_helpers/AuthGuard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/accueil" element={<Home />} />
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route
              path="/user"
              element={
                <AuthGuard>
                  <User />
                </AuthGuard>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

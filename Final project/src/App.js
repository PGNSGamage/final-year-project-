import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import UpdateProfile from "./pages/UpdateProfile";
import University from "./pages/University";
import UniversityInfo from "./pages/UniversityInfo";
import Zscore from "./pages/Zscore";
import Unis from "./pages/Unis";


function MainLayout({ children }) {
  const location = useLocation();
  const isNavbarVisible = !["/login", "/Register"].includes(location.pathname);

  return (
    <div className="w-full fixed top-0 left-0 right-0">
      {isNavbarVisible && <Navbar />}
      {children}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/zscore" element={<Zscore />} />
        <Route path="/unis" element={<Unis/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/UniversityInfo" element={<UniversityInfo />} />
          <Route path="/Update-Profile" element={<UpdateProfile />} />
          <Route path="/University" element={<University />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

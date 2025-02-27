import React, { Profiler } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarListing from "./pages/CarListingPage";
import CertifiedPre from "./pages/Certified_pre";
import AboutUs from "./pages/AboutUs";
import CarComparePage from "./pages/CarComparePage";
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";
import AdminPage from "./components/AdminPage";
import UserProfile from "./components/ContactDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes as needed */}
        <Route path ="/CarListingPage" element={<CarListing/>}/>
        <Route path="/Certified_pre/:id" element={<CertifiedPre />} />
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/CarComparePage" element={<CarComparePage/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/ProfilePage" element={<ProfilePage/>} />
        <Route path="/AdminPage" element={<AdminPage/>} />
        <Route path="/UserProfile" element={<UserProfile/>}/>
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
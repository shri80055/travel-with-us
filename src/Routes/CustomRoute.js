import React from "react";
  import { Route, Routes, useRouteError } from "react-router-dom";
import Loginpage from "../Pages/Loginpage";
import HomePage from "../Pages/HomePage";
import BlogPage from "../Pages/BlogPage";

const CustomRoute = () => {
  return (
    <>
    
    <Routes>

        <Route path="/" element={<Loginpage/>} />
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/BlogPage" element={<BlogPage />} />

    </Routes>
    
    </>
  )
}

export default CustomRoute

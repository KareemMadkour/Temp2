import React from "react";
import Home from "./Components/Home/Home";
import MiniNavbar from "./Components/Mini_Navbar/MiniNavbar";
import Navbar from "./Components/Navbar/Navbar";
import QuickSearches from "./Components/Quick_Searches/Quick_Searches";
import CollectionFood from "./Components/Collection_Food/Collection_Food";
import GetTheApp from "./Components/Get_The_App/Get_The_App";
import CustomerFeedback from "./Components/Customer_Feedback/Customer_Feedback";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    
      <Navbar />
      <MiniNavbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/quick-searches" element={<QuickSearches />} />
        <Route path="/collection-food" element={<CollectionFood />} />
        <Route path="/get-the-app" element={<GetTheApp />} />
        <Route path="/customer-feedback" element={<CustomerFeedback />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
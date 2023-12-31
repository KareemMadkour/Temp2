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
        <Route path="/" element={<Home />} />
        <Route path="/quick-searches1" element={<QuickSearches />} />
        <Route path="/collection-food1" element={<CollectionFood />} />
        <Route path="/get-the-app1" element={<GetTheApp />} />
        <Route path="/customer-feedback1" element={<CustomerFeedback />} />
        <Route path="/contact1" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
import React from "react";
import "./style.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Account from "./Account/Account";
import RDomains from "./Pages/RDomains";
import Dashboard from "./Pages/Dashboard";

export default function App() {
  return (
    <>
      <Header />
      <Account />
      <Sidebar />
    </>
  );
}

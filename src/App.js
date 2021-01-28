import React from "react"
import "./style.css"
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
import Account from "./Account/Account"

export default function App() {

  return(
  <>
    <Header/>
    <Account/>
    <Sidebar/>
  </>
  ); 
}
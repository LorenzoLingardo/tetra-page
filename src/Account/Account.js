import React from "react";

export default function Account() {
  return (
    <div class="account">
      <AccountButton name="Account" staff="Staff Profile" logout="Logout" />
    </div>
  );
}

function AccountButton(props) {
  return (
    <div class="dropdown">
      <button onclick="HideDropDown()" class="dropbtn">
        {" "}
        Account{" "}
      </button>
      <div id="dropdown-content" class="dropdown-content">
        <a href="">Staff Profile</a>
        <a href="">Log Out</a>
      </div>
    </div>
  );
}

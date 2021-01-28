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
    <b align="right">
      <select>
        <option id="Account"> {props.name}</option>,
        <option> {props.staff} </option>,<option> {props.logout} </option>
      </select>
    </b>
  );
}

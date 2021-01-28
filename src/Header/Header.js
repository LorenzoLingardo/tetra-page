import React from "react";

export default function Header() {
  return (
    <div class="header">
      <HeaderTitle name="Tetra Solutions" />
    </div>
  );
}

function HeaderTitle(props) {
  return <h1 align="left"> {props.name} </h1>;
}

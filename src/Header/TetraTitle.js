import React from "react";

export default function TetraTitle() {
  return (
    <div class="title">
      <a href="">
        <AlignTitle name="Tetra Solutions" />
      </a>
    </div>
  );
}

function AlignTitle(props) {
  return <h1 align="left"> {props.name} </h1>;
}

//I haven't implemented this yet

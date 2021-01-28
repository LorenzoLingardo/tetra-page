import React from "react";

export default function Sidebar() {
  return (
    <div class="side-bar">
      <SideBarHeader name="Dashboard" />
      <SideBarHeader name="Risk Domains" />
      <SideBarTabs option="Accreditation Participation Requirements" /> <br />
      <SideBarTabs option="Care, Treatment, & Services" /> <br />
      <SideBarTabs option="Emergency Management" /> <br />
      <SideBarTabs option="Environment of Care" /> <br />
      <SideBarTabs option="Human Resources Management" /> <br />
      <SideBarTabs option="Infection Prevent and Control" /> <br />
      <SideBarTabs option="Information Management" /> <br />
      <SideBarTabs option="Leadership" /> <br />
      <SideBarTabs option="Life Safety" /> <br />
      <SideBarTabs option="Medication Management" /> <br />
      <SideBarTabs option="National Patient Safety Goals" /> <br />
      <SideBarTabs option="Performance Improvement" /> <br />
      <SideBarTabs option="Record of Care, Treatment, & Services" /> <br />
      <SideBarTabs option="Rights and Responsibilities of the Individual" /> <br />
      <SideBarTabs option="Waived Testing" /> <br />
    </div>
  );
}

function SideBarHeader(props) {
  return <a href=""> <h3> {props.name} </h3> </a>;
}

function SideBarTabs(props) {
  return (
    <a href=""> {props.option} </a>
  );
}

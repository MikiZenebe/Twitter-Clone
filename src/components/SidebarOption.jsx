import React from "react";

import "../styles/SidebarOption.css";

function SidebarOption({ active, Icon, text }) {
  return (
    <div className={`sideOption ${active && "sideOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;

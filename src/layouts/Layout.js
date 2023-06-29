import React from "react";
import "./Layout.css";

function Layout({ children }) {
  return <div className="rootWrapper">{children}</div>;
}

export default Layout;

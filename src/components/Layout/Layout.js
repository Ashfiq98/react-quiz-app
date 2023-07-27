import React from "react";
import Nav from "../Nav/Nav";
import "./Layout.css";
export default function Layout({ children }) {
  return (
    <>
      <Nav></Nav>
      <main className="main">
        <div className="container">{children}</div>
      </main>
      {/* <Outlet></Outlet> */}
    </>
  );
}

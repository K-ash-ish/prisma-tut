import React from "react";

function Layout({ children }) {
  return (
    <>
      <nav>
        <h1>School DB</h1>
      </nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}

export default Layout;

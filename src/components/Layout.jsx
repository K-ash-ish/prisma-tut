import Link from "next/link";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <nav className=" text-center my-4">
        <Link className="text-2xl font-bold  " href={"/"}>
          School DB
        </Link>
      </nav>
      <main className="w-full flex justify-center">{children}</main>
    </>
  );
}

export default Layout;

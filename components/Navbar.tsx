import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-around items-center bg-blue-400 text-white w-3/4">
        <Link href="/">
          <h1>Katha.com</h1>
        </Link>
        <Link href="/addkatha">
          <h1>Add your Katha ➕</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

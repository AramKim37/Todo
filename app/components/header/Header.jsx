import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-20 py-8 border-2 border-t-gray-200">
      <div>
        <Link href="/">
          <h1>Note Whiz</h1>
        </Link>
      </div>
      <ul className="flex gap-5">
        <Link href="/login">
          <li>Login</li>
        </Link>
        <Link href="/register">
          <li>Register</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;

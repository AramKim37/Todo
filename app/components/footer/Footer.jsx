import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-20 py-8 border-2 border-t-gray-200">
      <div>
        <h1>@ 2024 All Right Reserved</h1>
      </div>
      <ul className="flex gap-5">
        <li>Terms</li>
        <li>Privacy</li>
        <li>Policy</li>
        <li>Cookies Policy</li>
      </ul>
    </div>
  );
};

export default Footer;

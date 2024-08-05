"use client";
import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[15rem] bg-neutral-800 border border-white-200 rounded-xl">
      <div>
        <div>
          <Image width={70} height={70} src="/dotory.jpeg" alt="profile" />
        </div>
      </div>
      <h1>
        <span>Aram</span>
        <span>Kim</span>
      </h1>
      <h1>Home</h1>
    </div>
  );
};

export default Sidebar;

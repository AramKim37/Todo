"use client";
import Image from "next/image";
import React from "react";
import { GiNotebook } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="w-[15rem] bg-neutral-800 border border-white-200 rounded-xl">
      <div className="flex p-5 w-max">
        <Image
          width={70}
          height={70}
          src="/dotory.jpeg"
          alt="profile"
          className="rounded-full"
        />
        <h1 className="w-full flex items-center">
          <span>Aram</span>
          <span>Kim</span>
        </h1>
      </div>
      <ul className="">
        <li className="flex ">
          <GiNotebook />
          <h1>Note</h1>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

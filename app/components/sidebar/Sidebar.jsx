"use client";
import Image from "next/image";
import React from "react";
import { GiNotebook } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="w-[15rem] bg-neutral-800 border border-white-200 rounded-xl">
      <div className="flex p-5 justify-between">
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
      <ul className="flex flex-col p-5 w-full items-center justify-center h-full">
        <li className="flex gap-10">
          <GiNotebook />
          <h1>All Notes</h1>
        </li>
        <li className="flex ">
          <GiNotebook />
          <h1>Important!</h1>
        </li>
        <li className="flex ">
          <GiNotebook />
          <h1>Completed</h1>
        </li>
        <li className="flex ">
          <GiNotebook />
          <h1>Do it now</h1>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

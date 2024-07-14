"use client";

import React from "react";
import { useState } from "react";

const Register = () => {
  const [info, setInfo] = useState({ username: "", email: "", password: "" });

  const handleInput = (e) => {
    setInfo(e.target.value);
  };
  console.log(info);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10">
      <div className="py-5">
        <h1 className="font-bold text-2xl">REGISTER</h1>
      </div>
      <form className="flex flex-col gap-5 w-[50%]">
        <input
          name="username"
          value={info.username}
          type="text"
          placeholder="Username"
          className="border-2 p-5 rounded-xl"
          onChange={(e) => handleInput(e)}
        />
        <input
          name="email"
          type="text"
          value={info.email}
          placeholder="Email"
          className="border-2 p-5 rounded-xl"
          onChange={(e) => handleInput(e)}
        />
        <input
          name="password"
          type="password"
          value={info.password}
          placeholder="Password"
          className="border-2 p-5 rounded-xl"
          onChange={(e) => handleInput(e)}
        />
        <button className="border-2 bg-pink-500 text-white p-5 rounded-xl">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

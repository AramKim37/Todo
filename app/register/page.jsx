"use client";

import React from "react";
import { useState } from "react";
import { registerUser } from "../serverActions/userAction";

const Register = () => {
  const [info, setInfo] = useState({ username: "", email: "", password: "" });
  const [feedback, setFeedback] = useState({ type: "", msg: "" });
  const [pending, setPending] = useState(false);

  const handleInput = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if (!info.username || !info.email || !info.password) {
      setFeedback((prev) => ({
        ...prev,
        type: "error",
        msg: "Must provide all the credencials.",
      }));
      return;
    }
    setPending(true);
    try {
      const res = await registerUser(info);
    } catch (error) {}
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10">
      <div className="py-5">
        <h1 className="font-bold text-2xl">REGISTER</h1>
      </div>
      <form className="flex flex-col gap-5 w-[50%]" onSubmit={handleSubmit}>
        <input
          name="username"
          value={info.username}
          type="text"
          placeholder="Username"
          className="border-2 p-5 rounded-xl"
          onChange={(e) => handleInput(e)}
        />
        {/* <label className={info.username ? "active" : ""}>Username</label> */}
        <input
          name="email"
          type="text"
          value={info.email}
          placeholder="Email"
          className="border-2 p-5 rounded-xl"
          onChange={(e) => handleInput(e)}
        />
        {/* <label className={info.email ? "active" : ""}>Email</label> */}

        <input
          name="password"
          type="password"
          value={info.password}
          placeholder="Password"
          className="border-2 p-5 rounded-xl"
          onChange={(e) => handleInput(e)}
        />
        {/* <label className={info.password ? "active" : ""}>Password</label> */}

        <button className="border-2 bg-pink-500 text-white p-5 rounded-xl">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

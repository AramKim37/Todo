import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10">
      <div className="py-5">
        <h1 className="font-bold text-2xl">REGISTER</h1>
      </div>
      <form className="flex flex-col gap-5 w-[50%]">
        <input
          placeholder="Username"
          className="border-2 p-5 rounded-xl"
        ></input>
        <input placeholder="Email" className="border-2 p-5 rounded-xl"></input>
        <input
          placeholder="Password"
          className="border-2 p-5 rounded-xl"
        ></input>
        <button className="border-2 bg-pink-500 text-white p-5 rounded-xl">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

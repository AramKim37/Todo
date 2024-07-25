"use client";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";
import { authenticate } from "../serverActions/userAction";

const Login = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10">
      <div className="py-5">
        <h1 className="font-bold text-2xl">LOGIN</h1>
      </div>
      <form className="flex flex-col gap-5 w-[50%]" action={dispatch}>
        <input placeholder="Email" className="border-2 p-5 rounded-xl"></input>
        <input
          placeholder="Password"
          className="border-2 p-5 rounded-xl"
        ></input>
        {errorMessage && <span>{errorMessage}</span>}
        <button className="border-2 bg-pink-500 text-white p-5 rounded-xl">
          Login
        </button>
        <div className="flex items-center justify-center">
          <h1>
            Don`t have an account?
            <Link href="/register" className="underline px-3 font-bold">
              Register
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Login;

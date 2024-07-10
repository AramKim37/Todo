import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10">
      <div>
        <h1>LOGIN</h1>
      </div>
      <form className="flex flex-col gap-5 w-[50%]">
        <input placeholder="Email" className="border-2 p-5"></input>
        <input placeholder="Password" className="border-2 p-5"></input>
        <button className="border-2 bg-pink-500 text-white p-5 rounded-xl">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

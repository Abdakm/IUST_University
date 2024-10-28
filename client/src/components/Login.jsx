import React, { useEffect, useRef } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Login = () => {
  const header = useRef();
  return (
    <div
      className="h-screen flex items-center justify-center bg-primary text-white"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "300px",
        backgroundPosition: "center",
      }}>
      <form
        className="max-w-sm w-full bg-black/75 rounded-lg shadow-lg"
        style={{ padding: "10px" }}>
        <div
          ref={header}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 0px",
          }}>
          <h2 className="text-2xl font-semibold text-center">Login</h2>
          <Link to={"/"}>
            <img src={logo} style={{ width: "50px", height: "50px" }} />
          </Link>
        </div>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-white">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            autoComplete="true"
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

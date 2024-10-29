import React, { useEffect, useRef } from "react";
import { logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = () => {
  const header = useRef();
  const navigate = useNavigate();

  function onSubmit() {
    console.log("send it to authentication table >>>");
    const { username, password } = values;
    axios
      .post("http://localhost:4000/universities", {
        username,
        password,
      })
      .then((res) => navigate("/", { replace: true }))
      .catch((err) => console.log(err));
  }

  const { values, touched, errors, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
      }),
      onSubmit,
    });

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
        onSubmit={handleSubmit}
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
            name="username"
            id="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
          {touched.username && errors.username ? (
            <div className="text-sm text-red-500 pl-5">{errors.username}</div>
          ) : null}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            autoComplete="on"
          />
          {touched.password && errors.password ? (
            <div className="text-sm text-red-500 pl-5">{errors.password}</div>
          ) : null}
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

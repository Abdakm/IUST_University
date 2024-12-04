import React, { useState } from "react";
import { logo } from "../assets"; // Make sure this points to your image
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cookies from "js-cookie";
import { useStore } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useStore();

  function onSubmit() {
    setMessage(null);
    setIsLoading(true);
    const { username, password } = values;

    axios
      .post("http://localhost:4000/university", {
        username,
        password,
      })
      .then((res) =>  {
        console.log(res.data)
        Cookies.set("username", res.data[0].username, { expires: 7 }); // expires in 7 days
        Cookies.set("id", res.data[0].student_id, { expires: 7 }); // expires in 7 days
        Cookies.set("sub_dep_id", res.data[0].sub_dep_id, { expires: 7 }) // expires in 7 days
        setUser(res.data[0].username);
        navigate("/", { replace: true, state: {username: res.data[0].username} });
      })
      .catch((err) => {
        setIsLoading(false);
        setMessage(err.response?.data?.message || "An error occurred.");
      });
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
    <div className="h-screen flex items-center justify-center bg-primary">
      <div className="flex bg-white rounded-lg shadow-lg w-11/12 max-w-4xl px-10 py-4">
        {/* Left Section - Image */}
        <div
          className="hidden md:flex w-1/2 rounded-l-lg bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${logo})`, // Add a valid image path
          }}
        />

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center mb-4">Welcome Back</h2>
          {message && (
            <div className="text-center mb-4 text-red-600 bg-red-100 border border-red-300 p-2 rounded-lg">
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  touched.username && errors.username
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {touched.username && errors.username && (
                <p className="text-sm text-red-500 mt-1">{errors.username}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  touched.password && errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {touched.password && errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

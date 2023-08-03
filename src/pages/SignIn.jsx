import React,{useCallback} from "react";
import { useForm } from "react-hook-form";
import LeftSection from "../assets/LeftSection.webp";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const registerUser = useCallback(async (userData) => {
    let { email, password } = userData;
    let response = await fetch("https://dev-back.vercel.app/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-type": "application/json",
      },
    });
    response = await response.json();
    navigate("/login");
  },[navigate])
  
  return (
    <div className="flex flex-col w-full h-full gap-4 p-4 md:flex-row md:p-10 md:gap-10">
      <div className="flex-1 relative h-full w-full  flex items-start justify-center  flex-col gap-4  md:gap-8 ">
        <img
          src={LeftSection}
          alt="LeftSection"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1 h-full">
        <form
          noValidate
          onSubmit={handleSubmit((data) => registerUser(data))}
          className="flex p-2 flex-col items-center justify-center gap-6 md:p-4 md:items-start"
        >
          <h1 className="w-full text-left text-3xl font-semibold">
            Create an Account
          </h1>
          <p className="w-full text-left md:text-left">
            Hello there, Let's start your journey with us
          </p>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
                message: "E-mail not valid",
              },
            })}
            id="email"
            placeholder="Enter Email"
            className="w-full p-3 rounded-lg text-black bg-gray-200 md:w-2/3"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <input
            type="password"
            {...register("password", {
              required: "Password cannot be empty",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message: "Password must contain 1 UpperCase letter",
              },
              minLength: { value: 8, message: "password too short" },
              maxLength: { value: 16, message: "password too long" },
            })}
            id="password"
            placeholder="Enter Password"
            className="w-full p-3 rounded-lg text-black bg-gray-200 md:w-2/3"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="bg-black w-full text-white p-3 rounded-lg md:w-2/3"
          >
            Sign In
          </button>
        </form>
        <hr className="w-full my-4 md:w-2/3 md:my-8" />
        <p className="w-full text-gray-500 md:w-2/3 text-center">
          Already have an account !
          <Link to="/login" className="text-pink-500 font-bold ">
            {" "}
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

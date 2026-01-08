import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import TextField from "./TextField";
import api from "../api/api";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const registerHandler = async (data) => {
        setLoader(true);
        try {
            const { data: response } = await api.post(
                "/api/auth/public/register",
                data
            ); 
            reset();
            navigate("/login");
            toast.success("Registeration Successful!")
        } catch (error) {
            console.log(error);
            toast.error("Registeration Failed!")
        } finally {
            setLoader(false);
        }
    };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md"
      >
        <h1 className="text-center font-serif font-bold text-2xl">
          Register Here
        </h1>

        <div className="flex flex-col gap-3 mt-4">
          <TextField
            label="Username"
            id="username"
            type="text"
            required
            message="Username is required"
            placeholder="Type your username"
            register={register}
            errors={errors}
          />

          <TextField
            label="Email"
            id="email"
            type="email"
            required
            message="Email is required"
            placeholder="Type your email"
            register={register}
            errors={errors}
          />

          <TextField
            label="Password"
            id="password"
            type="password"
            required
            min={6}
            message="Password is required"
            placeholder="Type your password"
            register={register}
            errors={errors}
          />
        </div>

        <button
          disabled={loader}
          type="submit"
          className="w-full py-2 mt-4 bg-green-900 text-white rounded"
        >
          {loader ? "Loading..." : "Register"}
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?
          <Link to="/login" className="ml-1 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;

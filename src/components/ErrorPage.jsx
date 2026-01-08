import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] 
      bg-[var(--color-bg-primary)] p-6 text-center">
      
      {/* ICON */}
      <div className="mb-6 flex items-center justify-center w-24 h-24 rounded-full 
        bg-red-500/10 shadow-[0_0_40px_rgba(239,68,68,0.25)]">
        <FaExclamationTriangle className="text-6xl text-red-500" />
      </div>

      {/* TITLE */}
      <h1 className="text-3xl font-montserrat font-bold mb-3 text-[var(--color-text-primary)]">
        Oops! Something went wrong.
      </h1>

      {/* MESSAGE */}
      <p className="text-[var(--color-text-secondary)] mb-8 max-w-md">
        {message ? message : "An unexpected error has occured"}
      </p>

      {/* CTA */}
      <button
        onClick={() => {
          navigate("/");
        }}
        className="px-5 py-2.5 rounded-md font-semibold text-white
        bg-[var(--color-accent)]
        hover:bg-[var(--color-accent-hover)]
        transition-all duration-200
        shadow-[var(--shadow-hover)]"
      >
        Go back to home
      </button>
    </div>
  );
};

export default ErrorPage;

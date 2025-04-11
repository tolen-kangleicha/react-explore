import React from "react";
import NavBar from "../components/NavBar"; // Import your NavBar component
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col h-screen bg-white text-white">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main className="flex flex-col justify-center items-center flex-grow text-center">
        <h1 className="text-8xl text-black font-bold">
          4<span className="text-black">👁</span>4
        </h1>
        <p className="text-lg text-black mt-2">
          SORRY, THERE'S <span className="text-black font-bold">NOTHING HERE</span>
        </p>
        <Link to="/">
          <button className="mt-6 bg-blue-600 text-black px-6 py-2 rounded text-sm font-bold hover:bg-lime-500">
            GO HOME
          </button>
        </Link>
      </main>

      {/* Footer */}
      <footer className="bg-footer text-gray-500 text-xs text-center py-2">
        <span>fsociety © 2025</span>
      </footer>
    </div>
  );
};

export default ErrorPage;

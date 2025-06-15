import { useState, useEffect } from "react";
import "./App.css";
import { Link, Outlet, useLocation } from "react-router";
import { IoIosMoon } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import Home from "./app/pages/Home";
import { FaUser } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaDiagramProject } from "react-icons/fa6";



function App() {
  const { pathname: path } = useLocation();
  console.log(path)

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div>

      {/* Toggle Theme */}
      <div className="flex justify-end relative my-5">
        <button className="cursor-pointer" onClick={() => setIsDarkMode(!isDarkMode)}>
          {
            isDarkMode ? <IoIosMoon size={30}></IoIosMoon> : <FiSun size={30}></FiSun>
          }
        </button>
      </div>

      {/* Banner Section */}
      <div className="mb-10">
        <Home></Home>
      </div>

      {/* Body Section */}

      <div className="md:flex gap-x-5">

        {/* Dashboard for phone */}
        <div className="md:hidden sticky bottom-0 z-10 flex justify-evenly w-full left-0 themed-bg py-2">
          <Link
            className={`${path == '/' || path == '/about' ? 'text-blue-700 font-bold' : ''} flex flex-col justify-center items-center`}
            to="/about">
            <FaUser size={20}></FaUser>
            <span className="text-[12px]">ABOUT</span>
          </Link>
          <Link
            className={`${path == '/project' && 'text-blue-700 font-bold'} flex flex-col justify-center items-center`}
            to="/project">
            <FaDiagramProject size={20}></FaDiagramProject>
            <span className="text-[12px]">PROJECT</span>
          </Link>
          <Link
            className={`${path == '/resume' && 'text-blue-700 font-bold'} flex flex-col justify-center items-center`}
            to="/resume">
            <IoDocumentTextSharp size={20}></IoDocumentTextSharp>
            <span className="text-[12px]">RESUME</span>
          </Link>
        </div>


        {/* Dashboard for large devices */}
        <div className="hidden md:block side-bar themed-bg rounded-2xl p-4">
          <div className="md:flex flex-col items-center gap-y-4">
            <Link
              className={`${path == '/about' || path == '/' ? 'bg-blue-700 text-white font-bold' : 'themed-div'} p-3 flex flex-col justify-evenly items-center rounded-2xl size-24`}
              to="/about">
              <FaUser size={30}></FaUser>
              ABOUT
            </Link>
            <Link
              className={`${path == '/project' ? 'bg-blue-700 text-white font-bold' : 'themed-div'} p-3 flex flex-col justify-evenly items-center rounded-2xl size-24`}
              to="/project">
              <FaDiagramProject size={30}></FaDiagramProject>
              PROJECT
            </Link>
            <Link
              className={`${path == '/resume' ? 'bg-blue-700 text-white font-bold' : 'themed-div'} p-3 flex flex-col justify-evenly items-center rounded-2xl size-24`}
              to="/resume">
              <IoDocumentTextSharp size={30}></IoDocumentTextSharp>
              RESUME
            </Link>
          </div>
        </div>

        <div className="outlet-content">
          <Outlet></Outlet>
        </div>

      </div>






    </div>
  );
}

export default App;

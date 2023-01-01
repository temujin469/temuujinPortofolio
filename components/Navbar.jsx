import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
// import { useRouter } from 'next/router';
import { RiMoonClearFill } from "react-icons/ri";
import NavLogo from "../public/logo.png";
import AppContext from "../context/appContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [dark, setDark] = useState(true);
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const { lang, setLang } = useContext(AppContext);

  useEffect(() => {
    const mode = localStorage.theme;

    const handleTheme = () => {
      if (mode === "dark") {
        setDark(true);
        document.documentElement.classList.add("dark");
      } else {
        setDark(false);
        document.documentElement.classList.remove("dark");
      }
    };

    handleTheme();
  }, []);

  const toggleTheme = () => {
    setDark(!dark);

    if (dark) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      toast.success("Харанхуй горим", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      localStorage.theme = "light";
      document.scrollingElement.classList.remove("dark");
      toast.success("Гэрэлтэй горим ");
    }
  };

  const setLangMongol = () => {
    setLang("MONGOL");
    toast.success("хэл солигдлоо", { icon: "🌏 " });
  };

  const setLangEnglish = () => {
    setLang("ENGLISH");
    toast.success("language has changed", { icon: "🌏 " });
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 dark:shadow-darkThird/30 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex px-5 dark:bg-darkPrimary justify-between items-center w-full h-full 2xl:px-16">
        <Link href="/">
          <a className="text-white  font-bold md:text-2xl bg-gradient-to-r from-primary to-[#ae70ff] p-3 rounded-md">
            {/* <Image
              src={NavLogo}
              alt="/"
              width="65"
              height="65"
              className="cursor-pointer object-cover rounded-full "
            /> */}
            Temuujin
          </a>
        </Link>
        <div className="flex items-center">
          <div className="flex items-center mr-10">
            <p
              onClick={setLangEnglish}
              className={`cursor-pointer ${
                lang !== "ENGLISH" && "text-gray-500"
              }`}
            >
              Eng
            </p>
            /
            <p
              onClick={setLangMongol}
              className={`cursor-pointer ${
                lang !== "MONGOL" && "text-gray-500"
              }`}
            >
              Mon
            </p>
          </div>
          <div onClick={toggleTheme}>
            {dark ? (
              <FaSun className="text-[20px]" />
            ) : (
              <RiMoonClearFill className="text-[20px]" />
            )}
          </div>
          <div>
            <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
              <li className="ml-7 dark:text-light hover:text-light text-sm uppercase from-primary to-[#ae70ff] hover:bg-gradient-to-r p-3 rounded-xl duration-200 ease-in-out">
                <Link href="/">{lang === "ENGLISH" ? "Home" : "Нүүр"}</Link>
              </li>
              <li className="ml-7 dark:text-light hover:text-light text-sm uppercase from-primary to-[#ae70ff] hover:bg-gradient-to-r p-3 rounded-xl duration-200 ease-in-out">
                <Link href="/#about">About</Link>
              </li>
              <li className="ml-7 dark:text-light hover:text-light text-sm uppercase from-primary to-[#ae70ff] hover:bg-gradient-to-r p-3 rounded-xl duration-200 ease-in-out">
                <Link href="/#skills">Skills</Link>
              </li>
              <li className="ml-7 dark:text-light hover:text-light text-sm uppercase from-primary to-[#ae70ff] hover:bg-gradient-to-r p-3 rounded-xl duration-200 ease-in-out">
                <Link href="/#projects">Projects</Link>
              </li>
              <li className="ml-7 dark:text-light hover:text-light text-sm uppercase from-primary to-[#ae70ff] hover:bg-gradient-to-r p-3 rounded-xl duration-200 ease-in-out">
                <Link href="/resume">Resume</Link>
              </li>
              <li className="ml-7 dark:text-light hover:text-light text-sm uppercase from-primary to-[#ae70ff] hover:bg-gradient-to-r p-3 rounded-xl duration-200 ease-in-out">
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
            {/* Hamburger Icon */}
            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className="md:hidden"
            >
              <AiOutlineMenu size={25} className="dark:text-light ml-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={`
          fixed top-0 p-10 ease-in duration-500 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] dark:bg-darkPrimary
            ${nav ? "left-0" : "left-[-100%]"}
          `}
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a className="text-white  font-bold md:text-2xl bg-gradient-to-r from-primary to-[#ae70ff] p-3 rounded-md">
                  Temuujin
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-darkThird p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/clint-briley-50056920a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/fireclint"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

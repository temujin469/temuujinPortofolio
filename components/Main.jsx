import Link from "next/link";
import React, { useContext } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaFacebook } from "react-icons/fa";
import AppContext from "../context/appContext";
import Container from "./Container";

const Main = () => {
  const { lang } = useContext(AppContext);
  return (
    <Container id={"main"} className="py-0">
      <div className="text-center pt-[80px] min-h-screen 2xl:min-h-[700px] flex justify-center items-center">
        <div>
          {lang === "ENGLISH" ? (
            <>
              <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-light">
                LET&#39;S BUILD SOMETHING TOGETHER
              </p>
              <h1 className="py-4 text-gray-700 dark:text-light">
                Hi, I&#39;m <span className="text-primary"> Temuujin</span>
              </h1>
              <h1 className="py-2 text-gray-700 dark:text-light">
                A Software Developer
              </h1>
              <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto dark:text-light">
                I’m focused on building responsive front-end web applications
                integrating back-end technologies.
              </p>
            </>
          ) : (
            <>
              <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-light">
                LET&#39;S BUILD SOMETHING TOGETHER
              </p>
              <h1 className="py-4 text-gray-700 dark:text-light">
                Hi, I&#39;m <span className="text-primary">Тэмүүжин</span>
              </h1>
              <h1 className="py-2 text-gray-700 dark:text-light">
                A Software Developer
              </h1>
              <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto dark:text-light">
                I’m focused on building responsive front-end web applications
                integrating back-end technologies.
              </p>
            </>
          )}

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/clint-briley-50056920a/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full border dark:border-primary shadow-xl hover:shadow-black hover:shadow-2xl dark:hover:shadow-darkThird sm:p-6 p-5 cursor-pointer hover:scale-110 ease-in duration-100">
                <FaFacebook />
              </div>
            </a>
            <a
              href="https://github.com/fireclint"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full border dark:border-primary shadow-xl hover:shadow-black hover:shadow-2xl dark:hover:shadow-darkThird sm:p-6 p-5 cursor-pointer hover:scale-110 ease-in duration-100">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full border dark:border-primary shadow-xl hover:shadow-black hover:shadow-2xl dark:hover:shadow-darkThird sm:p-6 p-5 cursor-pointer hover:scale-110 ease-in duration-100">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full border dark:border-primary shadow-xl hover:shadow-black hover:shadow-2xl dark:hover:shadow-darkThird sm:p-6 p-5 cursor-pointer hover:scale-110 ease-in duration-100">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;

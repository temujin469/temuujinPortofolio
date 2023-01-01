import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import AppContext from "../context/appContext";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  const { lang } = useContext(AppContext);
  return (
    <div className="relative flex md:h-fit w-fit overflow-hidden items-start h-fit justify-center shadow-lg hover:shadow-xl shadow-gray-400 dark:shadow-darkThird rounded-xl group hover:bg-gradient-to-r from-[#ff59e3] to-[#56e6ff]">
      <Image
        className="rounded-xl duration-300 ease-out group-hover:opacity-5"
        src={backgroundImg}
        objectFit="cover"
        objectPosition={"top"}
        width={1000}
        height={440}
        alt="/"
      />
      <div className="hidden w-full group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="md:text-2xl text-lg text-white tracking-wider text-center whitespace-nowrap">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-sm sm:text-base text-white text-center whitespace-nowrap">
          {tech}
        </p>
        <Link href={projectUrl}>
          <a target="_blank" className="flex justify-center">
            <p className="text-center w-fit py-1 sm:py-3 px-5 sm:px-10 md:px-20 rounded-lg bg-white text-gray-700 font-semibold text-base md:text-lg cursor-pointer">
              {lang === "ENGLISH" ? "More Info" : "Дэлгэрэнүй харах"}
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

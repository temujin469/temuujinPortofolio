import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import AppContext from "../context/appContext";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  const { lang } = useContext(AppContext);
  return (
    <div className="relative hover:scale-105 duration-300 ease-in-out flex md:h-fit w-fit overflow-hidden items-start h-fit justify-center shadow-lg hover:shadow-xl rounded-xl group border dark:border-primary">
      <Image
        src={backgroundImg}
        objectFit="cover"
        objectPosition={"top"}
        width={1000}
        height={440}
        alt="/"
      />
      <div className="hidden flex-col justify-center bg-primary group-hover:flex  h-full w-full absolute left-0 top-0">
        <h3 className="md:text-2xl drop-shadow-sm text-lg text-white tracking-wider text-center whitespace-nowrap">
          {title}
        </h3>
        <p className="pb-4 pt-2 drop-shadow-sm text-sm sm:text-base text-white text-center whitespace-nowrap">
          {tech}
        </p>
        <div className="flex justify-center">
          <Link href={projectUrl}>
            <a>
              <p className="text-center w-fit py-1 shadow sm:py-3 px-5 sm:px-10 md:px-20 hover:text-white hover:bg-gradient-to-r from-primary to-[#ae70ff] rounded-lg bg-white text-gray-700 button font-semibold text-base md:text-lg cursor-pointer">
                {lang === "ENGLISH" ? "More Info" : "Дэлгэрэнүй харах"}
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

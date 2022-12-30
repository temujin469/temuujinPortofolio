import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import AppContext from "../context/appContext";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  const { lang } = useContext(AppContext);
  return (
    <div className="relative flex md:h-fit w-fit overflow-hidden items-start h-fit justify-center shadow-xl shadow-gray-400 dark:shadow-darkThird rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl duration-300 ease-out group-hover:opacity-10"
        src={backgroundImg}
        objectFit="cover"
        objectPosition={"top"}
        width={1000}
        height={500}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <a target="_blank">
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              {lang === "ENGLISH" ? "More Info" : "Дэлгэрэнүй харах"}
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

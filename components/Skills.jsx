import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Java from "../public/assets/skills/java.png";
import NodeJS from "../public/assets/skills/node.png";
import Flutter from "../public/assets/skills/flutter.png";
import Dart from "../public/assets/skills/dart.png";
// import Express from "../public/assets/skills/java.png";
import CPlus from "../public/assets/skills/cplus.png";
import Python from "../public/assets/skills/python.png";
import Mysql from "../public/assets/skills/mySql.png";
import Mongo from "../public/assets/skills/mongo.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:min-h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="sm:text-xl  text-base tracking-widest uppercase text-primary">
          Skills
        </p>
        <h2 className="py-4 mb-2 sm:text-2xl text-xl lg:text-3xl">
          What I Can Do
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>HTML</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="hidden sm:block">JavaScript</p>
                <p className="sm:hidden">JS</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>React</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Tailwind</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Firebase} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Firebase</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Github</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Next</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NodeJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>NodeJS</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Java} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Java</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Python} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Python</p>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CPlus} width="60px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>C++</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Dart} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Dart</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Flutter} width="90px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Flutter</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mysql} width="95px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>MySQL</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl dark:shadow-darkThird hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mongo} width="66px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="hidden sm:block">MongoDB</p>
                <p className="sm:hidden">Mongo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import Image from "next/image";
import React from "react";

function SkillBox({ title, img }) {
  return (
    <div className="cursor-pointer backdrop-blur-xl bg-white/20 p-6 shadow-xl hover:shadow-2xl rounded-xl dark:hover:shadow-darkThird border dark:border-primary hover:scale-110 ease-in duration-100">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={img} width="64px" height="64px" alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillBox;

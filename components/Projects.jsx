import React, { useContext } from "react";
import ProjectItem from "./ProjectItem";
import AppContext from "../context/appContext";

const Projects = () => {
  const { lang } = useContext(AppContext);
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p
          className="text-xl tracking-widest uppercase text-[#5651e5]"
          data-aos="fade-up"
        >
          {lang === "ENGLISH" ? "Projects" : "Прожектууд"}
        </p>
        <h2 className="py-4">
          {lang === "ENGLISH" ? `What i've Built` : "Миний хийсэн прожектууд"}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Taliin Khishig LLC"
            backgroundImg="/assets/projects/taliin-khishig.png"
            projectUrl="https://taliin-khishig.vercel.app/"
            tech="ReactJS ,TailwindCSS"
          />
          <ProjectItem
            title="Otogmn"
            backgroundImg="/assets/projects/otogmn.png"
            projectUrl="/crypto"
            tech="ReactJS, TailwindCSS,NodeJS"
          />
          <ProjectItem
            title="Social Media App"
            backgroundImg="/assets/projects/socialMedia.png"
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Techno UI"
            backgroundImg="/assets/projects/technoBiyDaalt.png"
            projectUrl="/twitch"
            tech="Next JS"
          />
          <ProjectItem
            title="Travel WEB"
            backgroundImg="/assets/projects/aylal.png"
            projectUrl="/twitch"
            tech="Next JS"
          />
          <ProjectItem
            title="Ecommerce"
            backgroundImg="/assets/projects/ecommerce.png"
            projectUrl="/twitch"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

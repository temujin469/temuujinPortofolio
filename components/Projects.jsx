import React, { useContext } from "react";
import ProjectItem from "./ProjectItem";
import AppContext from "../context/appContext";

const Projects = () => {
  const { lang } = useContext(AppContext);
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p
          className="sm:text-xl text-base tracking-widest uppercase text-primary"
          data-aos="fade-up"
        >
          {lang === "ENGLISH" ? "Projects" : "Прожектууд"}
        </p>
        <h2 className="py-4 mb-2 text-xl lg:text-3xl sm:text-2xl">
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
            title="Togethermn"
            backgroundImg="/assets/projects/together.png"
            projectUrl="/twitch"
            tech="NextJS, TailwindCSS"
          />
          <ProjectItem
            title="Otogmn"
            backgroundImg="/assets/projects/otogmn.png"
            projectUrl="https://otog-mn.vercel.app/"
            tech="ReactJS, TailwindCSS"
          />
          <ProjectItem
            title="Bodi Electronics"
            backgroundImg="/assets/projects/bodi.png"
            projectUrl="https://bodi-electronics.vercel.app/"
            tech="ReactJS, TailwindCSS"
          />
          <ProjectItem
            title="Social Media App"
            backgroundImg="/assets/projects/socialMedia.png"
            projectUrl="*"
            tech="ReacJs,MySQL"
          />
          <ProjectItem
            title="Techno UI"
            backgroundImg="/assets/projects/technoBiyDaalt.png"
            projectUrl="https://techno-biy-daalt.vercel.app/"
            tech="ReactJS,CSS"
          />
          <ProjectItem
            title="Travel WEB"
            backgroundImg="/assets/projects/aylal.png"
            projectUrl="https://mern-aylal-app.vercel.app/"
            tech="ReactJs,CSS"
          />
          <ProjectItem
            title="Ecommerce"
            backgroundImg="/assets/projects/ecommerce.png"
            projectUrl="https://cosmetic-commerce.vercel.app/"
            tech="NextJS, SanityCMS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/images/about.jpg";
import Container from "./Container";

const About = () => {
  return (
    <Container id={"about"} className="pt-0">
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-12">
        <div className="col-span-3 mb-5 md:mb-0">
          <p className="uppercase sm:text-xl text-base tracking-widest text-primary">
            About
          </p>
          <h2 className="py-4 text-xl sm:text-2xl lg:text-3xl">Who I Am</h2>
          <p className="py-2 text-gray-600 dark:text-light">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2 text-gray-600 dark:text-light">
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 dark:text-light underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full  backdrop-blur-xl bg-white/20  col-span-2 h-auto m-auto shadow-xl border dark:border-primary dark:hover:shadow-darkThird hover:shadow-2xl rounded-xl flex items-center justify-center p-4 md:hover:scale-105 ease-in duration-300 group">
          <Image
            src={AboutImg}
            className="rounded-xl group-hover:scale-95 md:group-hover:scale-100 duration-300"
            alt="/"
          />
        </div>
      </div>
    </Container>
  );
};

export default About;

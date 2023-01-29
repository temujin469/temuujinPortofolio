import Head from "next/head";
import { useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-[url('/background.png')] bg-no-repeat bg-fixed md:bg-cover">
      <Head>
        <title>Lhagwajamal temuujin</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="px-5 sm:px-10">
          <Main />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </m.div>
    </div>
  );
}

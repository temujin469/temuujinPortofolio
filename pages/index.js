import Aos from "aos";
import Head from "next/head";
import { useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
    });
  });
  return (
    <div>
      <Head>
        <title>Lhagwajamal temuujin</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="px-4">
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

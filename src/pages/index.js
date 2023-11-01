import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/Skills";
import SocialLinks from "@/components/SocialLinks";
import Tester from "@/components/Tester";

import { useState } from "react";

export default function Home() {
  const [openAboutModal, setOpenAboutModal] = useState(false);

  const toggleAboutModal = () => {
    setOpenAboutModal(!openAboutModal);
  };
  return (
    <>
      <div className="mx-auto min-h-screen xl:container">
        <Header toggleModal={toggleAboutModal}/>
        <main className="grid  grid-cols-6 grid-rows-3">
          <div className="col-span-5 col-start-2 row-start-2  md:row-start-2">
            <Hero toggleModal={toggleAboutModal} openModal={openAboutModal}/>
          </div>
          <div className="col-start-6 row-start-2 hidden md:block">
            <SocialLinks />
          </div>
        </main>
      </div>
      <section className="mx-auto xl:container">
        <Projects />
      </section>
      <section className="mx-auto xl:container">
        <Skills />
      </section>
      <section className="">
        <Footer />
      </section>
      <section>
        <Tester />
      </section>
    </>
  );
}

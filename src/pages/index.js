import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
      <div className=" mx-auto min-h-screen">
        <Header />
        <main className="grid  grid-cols-6 grid-rows-3">
          <div className="col-span-5 col-start-2 row-start-2  md:row-start-2">
            <Hero />
          </div>
          <div className="col-start-6 row-start-2 hidden md:block">
            <SocialLinks />
          </div>
        </main>
      </div>
      <section className="xl:container mx-auto">
        <Projects />
      </section>
      <section className="xl:container mx-auto">
        <Skills />
      </section>
    </>
  );
}

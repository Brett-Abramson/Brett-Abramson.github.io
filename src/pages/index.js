import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="">
      <div className="container min-h-screen mx-auto">
        <Header />
        <main className="grid grid-cols-6 grid-rows-3">
          <div className="col-start-2 col-span-6 row-start-2">
            <Hero />
          </div>
          <div className="col-start-6 row-start-2">
            <SocialLinks />
          </div>
        </main>
      </div>
      <section className="container mx-auto">
          <Projects />
        </section>
    </div>
  );
}

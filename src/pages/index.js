import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-rows-[50px_1fr_1fr]">
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
    </div>
  );
}

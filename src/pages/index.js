import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen grid">
      <Header />
      <main className="grid grid-cols-4">
        <div className="col-start-2 col-span-2">
          <Hero />
        </div>
        <div className="col-start-4">
          <SocialLinks  />
        </div>
      </main>
    </div>
  );
}

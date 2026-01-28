import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";

export default function About() {
  return (
    <main className="min-h-dvh flex flex-col justify-between">
      <div className="relative flex flex-col">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px]" />
          <div className="absolute left-0 right-0 top-0 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-10 blur-[100px]" />
        </div>

        <Navbar />
        <AboutContent />
      </div>

      <Footer />
    </main>
  );
}

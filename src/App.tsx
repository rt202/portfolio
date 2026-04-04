import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { SeoHead } from "./components/SeoHead";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Demos } from "./components/sections/Demos";
import { Projects } from "./components/sections/Projects";

const App = () => {
  return (
    <div className="min-h-screen bg-[#020314] text-white">
      <SeoHead />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Demos />
      </main>
      <Footer />
    </div>
  );
};

export default App;

import { Header } from "./components/Layout/Header";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";

const App = () => {
  return (
    <div className="min-h-screen bg-[#020314] text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      {/* Minimal footer */}
      <footer className="border-t border-white/5 bg-[#020314] py-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Name. Built with React.
        </p>
      </footer>
    </div>
  );
};

export default App;

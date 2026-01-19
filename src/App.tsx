import { Footer } from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";

const App = () => {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

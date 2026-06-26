import { useState } from "react";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Projects from "./components/Projects";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: dark ? "#0A0F1E" : "#F8F9FF",
        color: dark ? "#F8F9FF" : "#0A0F1E",
        transition: "background-color 0.4s, color 0.4s",
      }}
    >
      <Navbar dark={dark} toggleDark={() => setDark((d) => !d)} />
      <Hero     dark={dark} />
      <About    dark={dark} />
      <Projects dark={dark} />
      <Contact  dark={dark} />
      <Footer   dark={dark} />
    </div>
  );
}

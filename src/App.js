import "./App.css";
import Header from "./Header";
import { ThemeProvider } from "./ThemeProvider";
import Home from "./Home";
import About from "./About";
import WhatIDO from "./WhatIDo";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Client from "./Client";
import Contact from "./Contact";
import ColorSwitcher from "./ColorSwitcher";
import Footer from "./Footer";
import BackHome from "./BackHome";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Home />
        <About />
        <WhatIDO />
        <Resume />
        <Portfolio />
        <Client />
        <Contact />
        <Footer />
        <ColorSwitcher />
        <BackHome />
      </ThemeProvider>
    </div>
  );
}

export default App;

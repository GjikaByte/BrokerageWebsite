import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App(){
  const [route, setRoute] = React.useState("home");

  React.useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if(hash) setRoute(hash);
    const onHash = () => setRoute(window.location.hash.replace("#", "") || "home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="site">
      <Navbar onNavigate={(r)=>{ window.location.hash = r }} />
      <main className="main">
        {route === "home" && <Home/>}
        {route === "about" && <About/>}
        {route === "services" && <Services/>}
        {route === "contact" && <Contact/>}
      </main>
      <Footer />
    </div>
  );
}

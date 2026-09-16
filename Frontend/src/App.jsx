import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Placeholder from "./pages/Placeholder";
import Projects from "./pages/Projects";
import Developers from "./pages/Developers";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyGuru from "./pages/WhyGuru";
import Insights from "./pages/Insights";

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/Insights" element={<Insights />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/why-guru" element={<WhyGuru />} />
          <Route
            path="/projects"
            element={
              <Placeholder title="Projects" eyebrow="Curated developments" />
            }
          />
          <Route
            path="/developers"
            element={
              <Placeholder
                title="Developer Partners"
                eyebrow="Trusted relationships"
              />
            }
          />
          <Route
            path="/services"
            element={
              <Placeholder
                title="Services"
                eyebrow="Advisory, acquisition & investment"
              />
            }
          />
          <Route
            path="/why-guru"
            element={
              <Placeholder
                title="Why Guru"
                eyebrow="Clarity behind every decision"
              />
            }
          />
          <Route
            path="/about"
            element={
              <Placeholder
                title="About Guru Estates Bank"
                eyebrow="Built around better decisions"
              />
            }
          />
          <Route
            path="/insights"
            element={
              <Placeholder
                title="Insights"
                eyebrow="Perspective for property decisions"
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Placeholder
                title="Let's talk"
                eyebrow="Real estate advisory & investment"
              />
            }
          />
          <Route
            path="*"
            element={<Placeholder title="Page not found" eyebrow="404" />}
          />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}

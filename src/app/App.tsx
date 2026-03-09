import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

/**
 * Main App Component
 * Portfolio website for Mohammed Naseer - UX/UI Designer
 * Features: Responsive design, smooth animations, scroll effects
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Expertise Section */}
        <Expertise />

        {/* Projects Section */}
        <Projects />

        {/* Process Section */}
        <Process />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact CTA Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
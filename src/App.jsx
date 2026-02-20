import NavigationBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EventCards from "./components/EventCards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />

      {/* main content */}
      <div className="flex-grow-1">
        <HeroSection />
        <EventCards />
      </div>

      <Footer />
    </div>
  );
}

export default App;
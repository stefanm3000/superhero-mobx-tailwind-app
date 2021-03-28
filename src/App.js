import HeroCard from "../src/components/hero-card";
import Navbar from "../src/components/navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <HeroCard />
      </div>
    </div>
  );
}

export default App;

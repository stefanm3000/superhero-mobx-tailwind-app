import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeroCard from "./components/hero-card";
import Navbar from "./components/navbar";
import Details from "./components/details";
import Favs from "./components/favs";
import Alphabet from "./components/letter-select";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Alphabet} />
            <Route path="/superhero/:id" component={Details} />
            <Route path="/favs" component={Favs} />
            <Route path="/starts-with/:letter" component={HeroCard} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

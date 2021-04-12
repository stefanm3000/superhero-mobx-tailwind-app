import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeroesGrid from "./components/heroes-grid";
import Navbar from "./components/navbar";
import Details from "./components/details";
import Favs from "./components/favs";
import Alphabet from "./components/letter-select";
import Landing from "./components/landing-page";
import FilterHeroes from "./components/filter-heroes";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/alphabet" component={Alphabet} />
            <Route path="/filter" component={FilterHeroes} />
            <Route path="/superhero/:id" component={Details} />
            <Route path="/favs" component={Favs} />
            <Route path="/starts-with/:letter" component={HeroesGrid} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

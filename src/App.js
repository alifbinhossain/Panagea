import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <main className="main">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;

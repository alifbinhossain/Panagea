import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Tours from "./Pages/Tours/Tours";

function App() {
  return (
    <main className="main">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/tours" component={Tours}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </main>
  );
}

export default App;

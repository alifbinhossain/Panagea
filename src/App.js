import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import Admin from "./Pages/Admin/Admin";
import Booking from "./Pages/Booking/Booking";
import Form from "./Pages/Form/Form";
import SignIn from "./Pages/Form/SignIn/SignIn.jsx";
import SignUp from "./Pages/Form/SignUp/SignUp.jsx";
import Home from "./Pages/Home/Home";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Tours from "./Pages/Tours/Tours";

function App() {
  return (
    <AuthProvider>
      <main className="main">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/tours" component={Tours}></Route>

            <PrivateRoute exact path="/tour/booking/:id">
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute exact path="/my_orders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>

            <Route exact path="/form/signin">
              <Form>
                <SignIn></SignIn>
              </Form>
            </Route>

            <Route exact path="/form/signup">
              <Form>
                <SignUp></SignUp>
              </Form>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </main>
    </AuthProvider>
  );
}

export default App;

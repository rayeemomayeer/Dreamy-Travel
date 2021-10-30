import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AccountDetails from "./components/AccountDetails/AccountDetails";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound"
import TourOrderDetails from "./components/TourOrderDetails/TourOrderDetails";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/tour/:tourId">
              <TourOrderDetails></TourOrderDetails>
            </PrivateRoute>
            <PrivateRoute path="/user/:userName">
              <AccountDetails></AccountDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

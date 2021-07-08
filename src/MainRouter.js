import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//brings in all components
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Movie from "./components/Movie/Movie";
import MovieDetail from "./components/Movie/MovieDetail";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
//sets up react-router
const MainRouter = (props) => {
  return (
    <Router>
      {/* brings in Nav component and props from user and handleuserlogout */}
      <Nav user={props.user} handleUserLogout={props.handleUserLogout} />
      <>
        {/* <Route exact path="/movie" component={Movie} /> */}
        {/* sets path for movie component using private route*/}
        <PrivateRoute exact path="/movie" component={Movie} />
        {/*sets path for Signup component */}
        <Route exact path="/sign-up" component={Signup} />
        {/* <Route exact path="/login" component={Login}>
          <Login handleUserLogin={props.handleUserLogin} />
        </Route> */}
        {/* brings in login component and sets path to login*/}
        <Route
          exact
          path="/login"
          render={(routerProps) => (
            <Login {...routerProps} handleUserLogin={props.handleUserLogin} />
          )}
        />
        {/* /api/user/user-detail/get-user-by-id/:id */}
        {/* <Route exact path="/movie-detail/:movieTitle" component={MovieDetail} /> */}
        {/* sets path for movieDetail component using private route*/}
        <PrivateRoute
          exact
          path="/movie-detail/:movieTitle"
          component={MovieDetail}
        />
        {/* sets path for Home component */}
        <Route exact path="/" component={Home} />
      </>
    </Router>
  );
};

export default MainRouter;

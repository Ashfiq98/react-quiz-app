// import {  } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Quiz from "../Pages/Quiz/Quiz";
import Result from "../Pages/Result/Result";
import Signup from "../Pages/Signup/Signup";
import "./App.css";

import { AuthProvider } from "../../contexts/AuthContext";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/result" component={Result} /> */}
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/quiz"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/result"
              element={
                <PrivateRoute>
                  {" "}
                  <Result />{" "}
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;

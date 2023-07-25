import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Quiz from "../Pages/Quiz/Quiz";
import Result from "../Pages/Result/Result";
import Signup from "../Pages/Signup/Signup";
import "./App.css";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/result" component={Result} />
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <Route exact path="/signup" element={<Signup />} /> */}
          {/* <Route exact path="/login" element={<Login />} /> */}
          {/* <Route exact path="/quiz" element={<Quiz />} /> */}
          {/* <Route exact path="/result" element={<Result />} /> */}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

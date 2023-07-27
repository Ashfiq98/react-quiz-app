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

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout></Layout>,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home></Home>,
  //         // loader: ()=> fetch('products.json')
  //       },
  //       {
  //         path: "/signup",
  //         element: <Signup></Signup>,
  //         // loader: productsAndCartLoader
  //       },
  //       {
  //         path: "/login",
  //         element: <Login></Login>,
  //       },
  //       {
  //         path: "/quiz",
  //         element: <Quiz></Quiz>,
  //       },
  //       {
  //         path: "/result",
  //         element: <Result></Result>,
  //       },
  //     ],
  //   },
  // ]);

  return (
    // <div>
    //   <RouterProvider router={router}></RouterProvider>
    // </div>
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
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/quiz" element={<Quiz />} />
            <Route exact path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;

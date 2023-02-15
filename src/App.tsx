import React, { Fragment, useContext } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import NotFound from "./pages/NotFound/NotFound";
import Protected from "./components/Protected";
import { AuthContext } from "./context/userAuthContext";
import ResetPassword from "./pages/Auth/ResetPassword";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";

const SignUp = React.lazy(() => import("./pages/Auth/SignUp"));
const SignIn = React.lazy(() => import("./pages/Auth/SignIn"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));
const Recipes = React.lazy(() => import("./pages/Recipes/Recipes"));

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipes" element={
            <React.Suspense fallback={<>...</>}>
              <Recipes />
            </React.Suspense>
          }
          />
          <Route
            path="/mytraining"
            element={
              <Protected user={user}>
                <p>My training</p>
              </Protected>
            }
          />
          <Route
            path="/fitness"
            element={
              <Protected user={user}>
                <p>My fitness</p>
              </Protected>
            }
          />
          <Route path="/caloriecalculator" />

          <Route path="/blog" element={
            <React.Suspense fallback={<>...</>}>
              <Blog />
            </React.Suspense>
          } />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="/signin"
          element={
            <React.Suspense fallback={<>...</>}>
              <SignIn />
            </React.Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <React.Suspense fallback={<>...</>}>
              <SignUp />
            </React.Suspense>
          }
        />
        <Route path="/reset-password" element={<ResetPassword />} />

      </Routes>
    </Fragment>
  );
};

export default App;

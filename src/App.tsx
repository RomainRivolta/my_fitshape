import React, { Fragment, useContext } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Nav";
import NotFound from "./pages/NotFound/NotFound";
import Recipes from "./pages/Recipes/Recipes";
import Protected from "./components/Protected";
import { AuthContext } from "./context/userAuthContext";
import ResetPassword from "./pages/Auth/ResetPassword";

const SignUp = React.lazy(() => import("./pages/Auth/SignUp"));
const SignIn = React.lazy(() => import("./pages/Auth/SignIn"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Fragment>
      <Menu />
      <Routes>
        <Route path="/" />
        <Route path="/recipes" element={<p>Recipes</p>} />
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
        <Route
          path="/signup"
          element={
            <React.Suspense fallback={<>...</>}>
              <SignUp />
            </React.Suspense>
          }
        />
        <Route
          path="/signin"
          element={
            <React.Suspense fallback={<>...</>}>
              <SignIn />
            </React.Suspense>
          }
        />
        <Route path="/blog" element={
          <React.Suspense fallback={<>...</>}>
            <Blog />
          </React.Suspense>
        }/>
        <Route path="/reset-password" element={<ResetPassword/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default App;

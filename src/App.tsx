import React, { Fragment, useContext } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import NotFound404 from "./pages/NotFound/NotFound404";
import Protected from "./components/Protected";
import { AuthContext } from "./context/userAuthContext";
import ResetPassword from "./pages/Auth/ResetPassword";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import Spinner from "./components/Spinner";
import CalorieCalculator from "./pages/CalorieCalculator/CalorieCalculator";

const SignUp = React.lazy(() => import("./pages/Auth/SignUp"));
const SignIn = React.lazy(() => import("./pages/Auth/SignIn"));
const BlogList = React.lazy(() => import("./pages/Blog/BlogList"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));
const RecipesList = React.lazy(() => import("./pages/Recipes/RecipeList"));
const Recipe = React.lazy(() => import("./pages/Recipes/Recipe"));

const App = () => {
  const { user } = useContext(AuthContext);

  const renderSpinner = (
    <Spinner />
  );

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/recipes">
            <Route index element={
              <React.Suspense fallback={renderSpinner}>
                <RecipesList />
              </React.Suspense>
            }
            />
            <Route path=":name" element={
              <React.Suspense fallback={renderSpinner}>
                <Recipe />
              </React.Suspense>
            } />
          </Route>

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

          <Route path="/caloriecalculator" element={
            <React.Suspense fallback={renderSpinner}>
              <CalorieCalculator />
            </React.Suspense>
          } />

          <Route path="/blogs">
            <Route index element={
              <React.Suspense fallback={renderSpinner}>
                <BlogList />
              </React.Suspense>
            } />
            <Route path=":name" element={
              <React.Suspense fallback={renderSpinner}>
                <Blog />
              </React.Suspense>
            } />
          </Route>

          <Route path="*" element={<NotFound404 />} />
        </Route>
        <Route
          path="/signin"
          element={
            <React.Suspense fallback={renderSpinner}>
              <SignIn />
            </React.Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <React.Suspense fallback={renderSpinner}>
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

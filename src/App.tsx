import React, { Fragment } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import NotFound from "./pages/NotFound";
import Recipes from "./pages/Recipes/Recipes";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";

const App = () => {
  return (
    <Fragment>
      <Menu />
      <Routes>
        <Route path="/" />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/mytraining' />
        <Route path='/fitness' />
        <Route path='/caloriecalculator' />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default App;

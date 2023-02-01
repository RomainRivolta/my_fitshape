import React, { Fragment } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import NotFound from './components/NotFound';
import Recipes from './components/Recipes';

const App = () => {
  return (
    <Fragment>
      <Menu />
      <Routes>
        <Route path='/' />
        <Route path='/recipes' element={<Recipes />}/>
        <Route path='/mytraining' />
        <Route path='/fitness' />
        <Route path='/caloriecalculator' />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Fragment>
  )
}

export default App;

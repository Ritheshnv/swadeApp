import React from 'react';
import './App.css';
import Product from './components/products';
import RecipeReviewCard from './components/card';
import PrimarySearchAppBar from './components/header';
import FooterPage from './components/footer';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <RecipeReviewCard/>
      <FooterPage/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import RecipeReviewCard from './components/card';
import ButtonAppBar from './components/header';
import FooterPage from './components/footer';

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <RecipeReviewCard/>
      <FooterPage/>
    </div>
  );
}

export default App;

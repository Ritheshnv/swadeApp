import React from 'react';
import './App.css';
import RecipeReviewCard from './components/card';
import ButtonAppBar from './components/header';
import FooterPage from './components/footer';
import HomeCarousel from './components/home-carousel';

function App() {
  return (
    <div id="App">
      <ButtonAppBar/>
      <HomeCarousel/>
      <RecipeReviewCard/>
      <FooterPage/>
    </div>
  );
}

export default App;

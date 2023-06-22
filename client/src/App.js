import './App.css';
import React from 'react';
import Wordle from './Assets/Pages/Wordle_Rule/Wordle';
import { Routes, Route, Outlet } from "react-router-dom";
import WordleGame from './Assets/Pages/Wordle_Game/Wordle_Game';
import GameRes from './Assets/Pages/Game_Res/Game_Res';
import NavigationBar from './Assets/Component/Navbar/Nav';
import NotFound from './Assets/Pages/NotFound/NotFound';

function App() {

  const LayoutNavigation = () => (
    <>
      <NavigationBar/>
      <Outlet/>
    </>
  )

  return (
    <div className="App">

      <Routes>
        
        <Route element={<LayoutNavigation/>}>
          <Route path="/" element={<Wordle />}/>
          <Route path="/game" element={<WordleGame/>}/>
          <Route path='/game-result' element={<GameRes/>}/>     
        </Route>
        
        <Route path='/*' element={<NotFound/>}/>     

      </Routes>

    </div>
  );
}

export default App;

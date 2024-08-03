// import logo from './logo.svg';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import DragAndDrop from './Pages/DragAndDrop';
import Calculator from './Pages/Calculator';
import ImageGallery from './Pages/ImageGallery';
import Modal from './Pages/Modal';
import BackgroundColor from './Pages/BackgroundColor';
import AccordionComponent from './Pages/AccordionComponent';
import StepperComponent from './Pages/StepperComponent';
import TodoList from './Pages/TodoList';
import QuizApp from './Pages/QuizApp';
import MatchPairGame from './Pages/MatchPairGame';
import Rating from './Pages/Rating';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/dragAndDrop' element={<DragAndDrop/>}/>
      <Route path='/calculator' element={<Calculator/>}></Route>
      <Route path='/gallery' element={<ImageGallery/>}></Route>
      <Route path='/modal' element={<Modal/>}></Route>
      <Route path='/background-color' element={<BackgroundColor/>}></Route>
      <Route path='/accordion' element={<AccordionComponent/>}></Route>
      <Route path='/stepper' element={<StepperComponent/>}></Route>
      <Route path='/todolist' element={<TodoList/>}></Route>
      <Route path='/quizapp' element={<QuizApp/>}></Route>
      <Route path='/matchpair' element={<MatchPairGame/>}></Route>
      <Route path='/rating' element={<Rating/>}></Route>
    </Routes>
    {/* <Home/> */}
    </>
  );
}

export default App;

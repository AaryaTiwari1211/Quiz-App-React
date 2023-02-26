import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { useState } from 'react';
import axios from 'axios'
function App() {
  const [name, setName] = useState('')
  // const [question, setQuestion] = useState('')
  // const [score, setScore] = useState(0)
  const fetchQuestions = (category = "", difficulty = "") => {
  axios.get(`https://opentdb.com/api.php?amount=10&category=${category && `&category=${category}`}&difficulty=${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });     
  }

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url(./back.jpg)' }}>
        <Header />
        <Routes>
        <Route path='/' exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/result' element={<Result/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

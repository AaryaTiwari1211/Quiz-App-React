import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Used for routing in different pages of the webapp
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { useState } from 'react'; // One of the hooks required in the making of the app
import axios from 'axios'//Used for API calling 
function App() {
  const [name, setName] = useState('') // Name attribute taken from user at the home page
  const [questions, setQuestions] = useState('') // This variable will be used during the API Call
  const [score, setScore] = useState(0) // The no,. of correct answers the user will give is stored here
  const fetchQuestions = (category = "", difficulty = "") => {
    axios.get(`https://opentdb.com/api.php?amount=10&category=${category && `&category=${category}`}&difficulty=${difficulty && `&difficulty=${difficulty}`}&type=multiple`, { crossDomain: true })
      .then(response => {
        console.log(response.data);
        const data = response.data;
        setQuestions(data.results);
      })
      .catch(err => {
        console.error(err);
      });
  } // This section involves the API call from the TRIVIA API using the get function of Axios. JQuery is also involved here

  return (
    // The main tag for Routing is the BrowserRouter
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url(./back2.jpg)' }}>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} />
          <Route path='/quiz' element={<Quiz name={name} questions={questions} score={score} setScore={setScore} />} />
          <Route path='/result' element={<Result score={score} name={name} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import ErrorMessage from '../../Pages/Home/ErrorMessage'
import './Questions.css'
import { useNavigate } from 'react-router-dom'

const Questions = ({ questions, setQuestions, currentQue, setCurrentQue, score, setScore, options, correct }) => {

    const [selected, setSelected] = useState() // to store the selected option
    const [error, setError] = useState(false) // To check if all field are filled or atleast one option is selected

    const navigate = useNavigate()

    const optionHandler = (i) => {
        if (!selected) {
            setSelected(i);
            if(i===correct) //Checks if the answer is correct
            {
                setScore(score+1) // this increments the score value by 1 whenever the answer recieved is Correct 
            }
            setError(false)
        }
    }
    const handleSelect = (i) => { // Here the selection for classes is taking place so that the wrong answer is marked with a red background and correct one with the green background

        if (selected === i && selected === correct) // Checks if I is correct and I is selected
        {
            return 'select';
        }
        else if (selected === i && selected !== correct) //Checks if the wrong ans is selected
        {
            return 'wrong';
        }
        else if (i === correct) // Displays the correct ans even if the user gave the wrong answer
        {
            return 'select';
        }
    }
    const handleNext = () => { // handles the 'Next Question' button
        if(currentQue>8)
        {
            navigate('/result') // Once the questions are finished redirects to the Results page
        }
        else if(selected)
        {
            setCurrentQue(currentQue+1) // Displays the Next Question
            setSelected();
        }
        else // If option is not selected.
        {
            setError("Please select an option to proceed")
        }
    }    
    const handleQuit = () => {}
    return (
        <div className='question'>
            <h1>Question {currentQue + 1}:</h1>
            <div className='singlequestion'>
                <h2>{questions[currentQue].question}</h2>

                <div className='options'>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {
                    options &&
                    options.map(i => (
                        <button
                            className={`singleoption ${selected && handleSelect(i)}`}
                            onClick={() => optionHandler(i)}
                            disabled={selected}
                            key={i}
                        >{i}</button>
                    ))
                }
                </div>
                <div className='buttons'>
                    <Button
                    variant="contained"
                    color='secondary'
                    style={{
                        width:185,
                        margin:10
                    }}
                    id='quit'
                    href='/' //Returns to the Home Page
                    onClick={handleQuit}
                    >Quit</Button>
                    <Button
                    variant="contained"
                    color='secondary'
                    id='nextque'
                    onClick={handleNext}
                    style={{
                        width:185,
                        margin:10
                    }}
                    >Next Question</Button>
                </div>
            </div>
        </div>
    )
}

export default Questions
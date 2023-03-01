import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import ErrorMessage from '../../Pages/Home/ErrorMessage'
import './Questions.css'

const Questions = ({ questions, setQuestions, currentQue, setCurrentQue, score, setScore, options, correct }) => {
    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)

    const optionHandler = (i) => {
        if (!selected) {
            setSelected(i);
            if(i===correct)
            {
                setScore(score+1)
            }
            setError(false)
        }
    }
    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return 'selected';
        }
        else if (selected === i && selected !== correct) {
            return 'wrong';
        }
        else if (i === correct) {
            return 'select';
        }

    }
    return (
        <div className='question'>
            <h1>Question {currentQue + 1}:</h1>
            <div className='singlequestion'>
                <h2>{questions[currentQue].question}</h2>

                <div className='options'>
                {error && <ErrorMessage children={<h6>Please select an option</h6>} />}
                {
                    options &&
                    options.map(i => (
                        <button
                            className={`singleoption ${selected && handleSelect(i)}`}
                            onClick={optionHandler(i)}
                            disabled={selected}
                            key={i}
                        >{i}</button>
                    ))
                }
                </div>
                <div>
                    <Button
                    variant="contained"
                    color='secondary'
                    size='large'
                    style={{width:185}}
                    >Quit</Button>
                    <Button variant="contained">Next Question</Button>
                </div>
            </div>
        </div>
    )
}

export default Questions
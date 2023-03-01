import React from 'react'
import { useState } from 'react'
import ErrorMessage from '../../Pages/Home/ErrorMessage'
import './Questions.css'

function Questions(currentQue,setCurrentQue,score,setScore,questions,setQuestions,options,correct) {
    const [selected, setselected] = useState()
    const [error, setError] = useState(false)
    const optionHandler = () => {

    }
    return (
        <div>
            <h1>Question {currentQue + 1}:</h1>
            <div className='question'>
                <h2>{questions[currentQue].question}</h2>
                {error && <ErrorMessage children={<h6>Please select an option</h6>}/>}
                {
                    options &&
                    options.map(i=>(
                        <button 
                        className={'btn'}
                        onClick={optionHandler}
                        disabled={selected}
                        key={i}
                        >{i}</button>
                    ))
                }
                <div className='options'>
                </div>
            </div>
        </div>
    )
}

export default Questions
import React from 'react'
import { useEffect , useState } from 'react'
import './Quiz.css'
import  CircularProgress  from '@mui/material/CircularProgress';
import Questions from '../../components/Questions/Questions';

function Quiz({ name, score, questions, setQuestions, setScore }) {

    const [options, setOptions] = useState();
    const [currentQue, setCurrentQue] = useState(0);

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5)
    }
    
    useEffect(() => {
        if(!questions || !questions[currentQue])
        {
            return;
        }
        setOptions(handleShuffle([
            questions[currentQue]?.correct_answer,
            ...questions[currentQue]?.incorrect_answers
        ]))
    }, [questions, currentQue])
    console.log(options)
    return (
        <div className='quiz_main'>
            {questions ? <>
                <span className='subTitle'>Welcome <b>{name}</b></span> 
                    <div className='score_topic'>
                        <span className='st_item'>Category: {questions[currentQue].category}</span>
                        <span className='st_item'>Score: {score}</span>
                    </div>
                    <Questions
                    currentQue={currentQue}
                    setCurrentQue={setCurrentQue}
                    score={score}
                    setScore={setScore}
                    questions={questions}
                    setQuestions={setQuestions}
                    options={options}
                    correct={questions[currentQue]?.correct_answer}
                    />
                </>
                : <CircularProgress 
            style={{margin:100}}
            size={150}
            color = 'inherit'
            thickness={1}/>} 

        </div>

    )
}

export default Quiz
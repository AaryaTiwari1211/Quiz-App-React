import React from 'react'
import { useEffect , useState } from 'react'
import './Quiz.css'
import  CircularProgress  from '@mui/material/CircularProgress';
import Questions from '../../components/Questions/Questions';

function Quiz({ name, score, questions, setQuestions, setScore }) {

    const [options, setOptions] = useState();
    const [currentQue, setCurrentQue] = useState(0);

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5) // The formula for shuffling using the Random function...
    }
    
    useEffect(() => {
        if(!questions || !questions[currentQue]) //Checks if questions are recieved from the API or not or if the array has been scanned completely
        {
            return;
        }
        setOptions(handleShuffle([
            questions[currentQue]?.correct_answer, // This part handles the shuffling of the options so that the option A is not always the correct ans
            ...questions[currentQue]?.incorrect_answers // Spread operator is used to spread the array values in the incorrect answers array
        ]))
    }, [questions, currentQue]) // Re renders the component when these values are changed
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
                    questions={questions}
                    setQuestions={setQuestions}
                    score={score}
                    setScore={setScore}
                    options={options}
                    correct={questions[currentQue].correct_answer}
                    />
                </>
                : <CircularProgress  // This is the loader which runs till the data is fetched from the API
            style={{margin:100}}
            size={150}
            color = 'inherit'
            thickness={1}/>} 

        </div>

    )
}

export default Quiz
import React from 'react'
import { useEffect , useState } from 'react'

function Quiz({ name, score, questions, setQuestions, setScore }) {

    const [options, setOptions] = useState();
    const [currentQue, setCurrentQue] = useState(0);

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5)
    }
    useEffect(() => {
        if(!questions)
        {
            return;
        }
        console.log(questions)
        setOptions(questions && handleShuffle([
            questions[currentQue]?.correct_answer,
            ...questions[currentQue]?.incorrect_answers
        ]))
    }, [questions,currentQue])

    console.log(options)

    return (
        <div>

        </div>
    )
}

export default Quiz
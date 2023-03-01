import React from 'react'
import './Home.css'
import { Button, MenuItem, TextField } from '@mui/material';//These are ready-made components in React MUI (Material UI)
import SendIcon from '@mui/icons-material/Send';
import Categories from '../../Trivia_Data/Categories'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ErrorMessage from './ErrorMessage';

function Home({name , setName , fetchQuestions}) // The name , setName and Questions are sent here as props from the App.jsx file
{
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate() //From React Router DOM allows navigation between pages 

    const handleSubmit = () => {
        if(!category || !name || !difficulty) // Checks whether any field is missing
        {
            setError(true);
            console.log('Fill all the Fields')
            return;
        } // This case runs when all the fields are not filled in by the user
        else
        {
            setError(false);
            fetchQuestions(category , difficulty); // Sends the category and difficulty to the user for fetching data
            console.log('Fetching the Questions')
            navigate('/quiz')
        }//When all the fields are filled by the user and the user is navigated to the Quiz Page
    }

    return (
        <div className='home-content'>
            <div className='settings'>
                <span>Quiz Settings</span>
                <div className='settings-select'>
                    {/* The error message is displayed when All fields are not filled */}
                    { error ? <ErrorMessage children={<h6>Please fill all the fields</h6>}/> : ''}  
                    <TextField
                        sx={{
                            "& .MuiFormLabel-root": {
                                color: 'white'
                            },
                            "& .MuiFormLabel-root.Mui-focused": {
                                color: 'white'
                            }
                        }}
                        label='Enter your Name'
                        className='home_field'
                        variant='standard'
                        id='name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <TextField //This is the Textfield API of MUI which is a component providing an input field
                        sx={{
                            "& .MuiFormLabel-root": {
                                color: 'white'
                            },
                            "& .MuiFormLabel-root.Mui-focused": {
                                color: 'white'
                            }
                        }}
                        select
                        label='Select Category'
                        className='home_field'
                        variant='standard'
                        id='category'
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        {
                            Categories.map(cat => (
                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    <TextField
                        sx={{
                            "& .MuiFormLabel-root": {
                                color: 'white'
                            },
                            "& .MuiFormLabel-root.Mui-focused": {
                                color: 'white'
                            }
                        }}
                        select
                        label='Select Difficulty'
                        className='home_field'
                        variant='standard'
                        id='difficulty'
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulty}
                    >
                        <MenuItem key='Easy' value='easy' //These are the Items in the Selection table within the Textfield API
                        >
                            Easy
                        </MenuItem>

                        <MenuItem key='Medium' value='medium'>
                            Medium
                        </MenuItem>

                        <MenuItem key='Hard' value='hard'>
                            Hard
                        </MenuItem>
                    </TextField>
                    <Button
                    variant='contained'
                    endIcon={<SendIcon/>}
                    onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>
                </div>
            </div>
            <img src='./home2.svg' className='banner' alt='quiz_image' />
        </div>

    )
}

export default Home
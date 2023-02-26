import React from 'react'
import './Home.css'
import { Button, MenuItem, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Categories from '../../Trivia_Data/Categories'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ErrorMessage from './ErrorMessage';

function Home({name , setName , fetchQuestions}) 
{
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = () => {
        if(!category || !name || !difficulty)
        {
            setError(true);
            console.log('Fill all the Fields')
            return;
        }
        else
        {
            setError(false);
            fetchQuestions(category , difficulty);
            console.log('Fetching the Questions')
            navigate('/quiz')
        }
    }

    return (
        <div className='home-content'>
            <div className='settings'>
                <span>Quiz Settings</span>
                <div className='settings-select'>
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
                        <MenuItem key='Easy' value='easy'>
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
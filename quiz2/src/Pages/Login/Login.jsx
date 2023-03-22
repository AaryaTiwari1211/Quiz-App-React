import React from 'react'
import './Login.css'
import { Button, MenuItem, TextField } from '@mui/material';//These are ready-made components in React MUI (Material UI)
import SendIcon from '@mui/icons-material/Send';
import Categories from '../../Trivia_Data/Categories'
import fire from '../../firebase';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ErrorMessage from '../Home/ErrorMessage';

function Login()
{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate() //From React Router DOM allows navigation between pages 

    const handleSubmit = () => {
        if(!username || !password ) // Checks whether any field is missing
        {
            setError(true);
            console.log('Please Fill all the Fields')
            return;
        } // This case runs when all the fields are not filled in by the user
        else
        {
            setError(false);
            navigate('/signup')
        }//When all the fields are filled by the user and the user is navigated to the Quiz Page
    }

    return (
        <div className='home-content'>
            <div className='settings'>
                <span>Login Page</span>
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
                        label='Enter your Email'
                        className='home_field'
                        variant='standard'
                        id='email'
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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
                        label='Enter Your Password'
                        className='home_field'
                        variant='standard'
                        name='password'
                        type='password'
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <Button
                    variant='contained'
                    endIcon={<SendIcon/>}
                    onClick={handleSubmit}
                    >
                        Login
                    </Button>
                </div>
            </div>
            <img src='./home2.svg' className='banner' alt='quiz_image' />
        </div>

    )
}

export default Login
import React from 'react'
import './Home.css'
import { TextField } from '@mui/material';
function Home() {
    return (
        <div className='home-content'>
            <div className='settings'>
                <span>Quiz Settings</span>
                <div className='settings-select'>
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
                        variant='standard'
                        id='name'
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
                        className='category_field'
                        variant='standard'
                        id='category'
                    />
                </div>
            </div>
            <img src='./home2.svg' className='banner' alt='quiz_image' />
        </div>

    )
}

export default Home
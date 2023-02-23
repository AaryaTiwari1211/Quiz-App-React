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
                    // sx={{border:"",borderRadius: 1}}
                    select
                    label='Select Category'
                    variant='outlined'
                    id='category'
                /> 
            </div>
            </div>
            <img src='./home2.svg' className='banner' alt='quiz_image'/>
        </div>
        
    )
}

export default Home
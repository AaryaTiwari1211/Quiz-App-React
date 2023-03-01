import React from 'react'
import './Result.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
const Result = ({ score , name }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!name) {
            navigate('/')
        }
    }, [name,navigate])

    return (
        <div className='result'>    
            <span className='score'>Your Total Score was : <b>{score}</b></span>
            <Button
                variant="contained"
                color='secondary'
                href='/'
                style={{
                    alignSelf:'center',
                    marginTop:20
                }}
                >Back to Home Page</Button>
        </div>
    )
}

export default Result
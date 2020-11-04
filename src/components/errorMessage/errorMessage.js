import React from 'react'
import './errorMessage.css'
import img from './error.png'

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span>Something went wrong</span>
        </>
    )
}

export default ErrorMessage
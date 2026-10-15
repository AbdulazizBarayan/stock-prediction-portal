import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Stock predeictal Portal</h1>
          <p className='text-light lead'>A machine learning web application that predicts stock prices using historical market data. Users can explore stock trends, view interactive price charts, and see model-generated predictions through a simple, user-friendly interface. The application combines machine learning with data visualization to make stock market analysis easier to understand.</p>
          <Button text="Login" class="btn-outline-info"/>
        </div>
      </div>
    
    </>
  )
}

export default Main
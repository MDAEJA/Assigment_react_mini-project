import React, { useState } from 'react'
import '../Pages/ratingStyle.css'

function Rating() {
    const[rate,setRate] = useState('null')
    const ratingMessages = {
        1: 'Terrible 😠',
        2: 'Bad 😞',
        3: 'Average 😐',
        4: 'Good 😊',
        5: 'Excellent 😍'
    };
    
    const clickHandler = (value)=>{
        const getrating = ratingMessages[value];
        setRate(getrating);
    }
  return (
    <div className='rating-main-div'>
        <div className='rating-div'>
        <div className='rating'>
          <input type="radio" name='rated' id='star5' value='5' onClick={(e)=>{clickHandler(e.target.value)}}/>
          <label htmlFor="star5" className="star">★</label>
          
          <input type="radio" name='rated' id='star4' value='4' onClick={(e)=>{clickHandler(e.target.value)}} />
          <label htmlFor="star4" className="star">★</label>
          
          <input type="radio" name='rated' id='star3' value='3' onClick={(e)=>{clickHandler(e.target.value)}}/>
          <label htmlFor="star3" className="star">★</label>
          
          <input type="radio" name='rated' id='star2' value='2' onClick={(e)=>{clickHandler(e.target.value)}} />
          <label htmlFor="star2" className="star">★</label>
          
          <input type="radio" name='rated' id='star1' value='1' onClick={(e)=>{clickHandler(e.target.value)}} />
          <label htmlFor="star1" className="star">★</label>
        </div>
        <h4 style={{textAlign:"center"}}> {(rate === 'null') ? 'Give me Feed Back !!!' : rate}</h4>
        </div>
    </div>
  )
}

export default Rating

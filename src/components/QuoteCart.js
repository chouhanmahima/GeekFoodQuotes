import React from 'react'
import './QuoteCart.css';

const QuoteCart = (props) => {
  return (
    <div>
        <div className='quote-cart'>
            <p className='quote-para'>{props.description}</p>
            <p className='quote-author'>{props.author}</p>
        </div>
    </div>
  )
}

export default QuoteCart;
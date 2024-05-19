import React from 'react'


const Card = ({img,title,price,date}) => {
  return (
    
    <div className='card--component'>
        <img className='card' src={img} alt="slika"></img>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <h3>{date}</h3>
    </div>
  )
}

export default Card
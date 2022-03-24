import React from 'react';
import './Card.css'
import { BsFillCartFill } from 'react-icons/bs'

const Card = ({ gunData }) => {
    // console.log(data);
    const { img, name, bullet, capacity, action, price } = gunData;
    return (
        <div className='card'>
            <div className='image-container'>
                <img className='gun-img' src={img} alt="" />
            </div>
            <h3>{name}</h3>
            <p>Bullet Type: {bullet}</p>
            <p>Capacity: {capacity}</p>
            <p>Action: {action}</p>
            <div className='add-to-cart'>
                <button className='icon' ><BsFillCartFill /></button>
                <h1>$ {price}</h1>
            </div>
        </div>
    );
};

export default Card;
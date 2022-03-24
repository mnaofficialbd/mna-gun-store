import React from 'react';
import './Card.css'
import { BsFillCartFill } from 'react-icons/bs'

const Card = ({ gunData }) => {
    // console.log(data);
    const { img, name, bullet, capacity, action, price, id, handleAddToCart } = gunData;

    return (
        <div className='card'>
            <div className='image-container'>
                <img className='gun-img' src={img} alt="" />
            </div>
            <div className="gun-info">
                <h3>{name}</h3>
                <p>Bullet Type: {bullet}</p>
                <p>Capacity: {capacity}</p>
                <p>Action: {action}</p>
            </div>
            <div className='add-to-cart'>
                <button onClick={() => handleAddToCart(id)} className='icon' ><BsFillCartFill /></button>
                <h1>$ {price}</h1>
            </div>
        </div>
    );
};

export default Card;
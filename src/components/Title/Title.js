import React from 'react';
import './Title.css';

const Title = ({ text }) => {
    return (
        <div className='Title'>
            <div className='Text'>{text}</div>
            <hr className='Line' />
        </div>
    );
};

export default Title;

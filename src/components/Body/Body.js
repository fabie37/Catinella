import React from 'react';
import './Body.css';

const Body = ({ text, align }) => {
    return (
        <div className={'Body ' + align}>
            <div className={'Body-Text ' + align}>{text}</div>
        </div>
    );
};

export default Body;

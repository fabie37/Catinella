import React from 'react';
import './Title.css';

const Title = ({ text, align }) => {
    return (
        <div className={'Title ' + align}>
            <div className={'Text ' + align}>{text}</div>
            <hr className={'Line ' + align} />
        </div>
    );
};

export default Title;

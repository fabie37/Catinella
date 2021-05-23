import React from 'react';
import './Floaty.css';

const Floaty = ({ floaty_list }) => {
    return (
        <div className='Floaty-Row'>
            {floaty_list.map((text, index) => {
                return (
                    <div
                        className='Floaty-Text'
                        style={{
                            animation: 'fade_in 3s ease-in-out '.concat(
                                index + 2,
                                's forwards'
                            ),
                        }}
                    >
                        {text}
                    </div>
                );
            })}
        </div>
    );
};

export default Floaty;

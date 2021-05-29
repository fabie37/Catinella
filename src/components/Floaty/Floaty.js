import React from 'react';
import './Floaty.css';

const Floaty = ({ floaty_list }) => {
    const animation_delay = 1.2;
    const animation_duration = 1;

    return (
        <div className='Floaty-Row'>
            {floaty_list.map((text, index) => {
                return (
                    <div
                        key={index}
                        className='Floaty-Text'
                        style={{
                            animation: `fade_in ${animation_duration}s ease-in-out ${
                                index + animation_delay
                            }s forwards`,
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

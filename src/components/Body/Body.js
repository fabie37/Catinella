import React from 'react';
import './Body.css';

const Body = ({ elements = null, text = null, align }) => {
    return (
        <div className={'Body ' + align}>
            {text && <div className={'Body-Text ' + align}>{text}</div>}
            {elements && (
                <div className={'Body-Elements ' + align}>
                    {elements.map((obj, i) => {
                        return (
                            <div key={i} className={'Body-Text ' + align}>
                                {obj}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Body;

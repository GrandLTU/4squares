import React from 'react';
import classNames from 'classnames/bind';

const Square = ({ callback, color, active, disabled}) => {
    return (
        <div className={classNames({
            square: true,
            active: active
        })}>
            <button style={{backgroundColor: color}} onClick={callback} disabled={disabled}/>
        </div>
    );
};

export default Square;

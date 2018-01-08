import React from 'react';
import Square from "../Square";

const Squares = ({squares, callback, disabled}) => {
    return (
        <div className="squares">
            {squares.map(square => (
                <Square key={square.get('id')} active={square.get('active')} color={square.get('color')} disabled={disabled} callback={() => callback(square.get('id'))}/>
            ))}
        </div>
    );
};

export default Squares;

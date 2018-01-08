import { constants } from '../../constants';

export const clickSquare = square => {
    return {
        type: constants.squares.CLICK,
        payload: {
            square
        }
    }
};

export const blinkSquare = (square) => {
    return {
        type: constants.squares.BLINK,
        payload: {
            square
        }
    }
};

export const activateSquare = square => {
    return {
        type: constants.squares.ACTIVATE,
        payload: {
            square
        }
    }
};


export const deactivateSquare = square => {
    return {
        type: constants.squares.DEACTIVATE,
        payload: {
            square
        }
    }
};

import { constants } from '../../constants';

export const restartSession = () => {
    return {
        type: constants.session.RESTART,
        payload: {}
    }
};

export const setRound = (round) => {
    return {
        type: constants.session.SET_ROUND,
        payload: {
            round
        }
    }
};

export const setPosition = (position) => {
    return {
        type: constants.session.SET_POSITION,
        payload: {
            position
        }
    }
};

export const startShowing = () => {
    return {
        type: constants.session.START_SHOWING,
        payload: {}
    }
};

export const stopShowing = () => {
    return {
        type: constants.session.STOP_SHOWING,
        payload: {}
    }
};

export const setLost = () => {
    return {
        type: constants.session.SET_LOST,
        payload: {}
    }
};

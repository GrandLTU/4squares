import { constants } from '../../constants';

export const setSequence = sequence => {
    return {
        type: constants.sequence.SET,
        payload: {
            sequence
        }
    }
};

export const generateSequence = () => {
    return {
        type: constants.sequence.GENERATE,
        payload: {}
    }
};

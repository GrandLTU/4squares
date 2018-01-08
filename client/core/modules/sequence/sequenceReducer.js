import {List, Map} from 'immutable';
import { constants } from '../../constants';

const initialState = List([]);

const squares = (state = initialState, action) => {
    switch (action.type) {
        case constants.sequence.SET:
            return List(action.payload.sequence);
        default:
            return state;
    }
};

export default squares;

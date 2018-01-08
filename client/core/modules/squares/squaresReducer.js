import {List, Map} from 'immutable';
import {constants} from '../../constants';

const initialState = List([
    Map({id: 0, color: "#2ecc71", active: false}),
    Map({id: 1, color: "#3498db", active: false}),
    Map({id: 2, color: "#f39c12", active: false}),
    Map({id: 3, color: "#e74c3c", active: false}),
]);

const squares = (state = initialState, action) => {
    switch (action.type) {
        case constants.squares.ACTIVATE:
            return state.setIn([action.payload.square, 'active'], true);
        case constants.squares.DEACTIVATE:
            return state.setIn([action.payload.square, 'active'], false);
        default:
            return state;
    }
};

export default squares;

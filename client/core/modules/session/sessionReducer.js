import {Map} from 'immutable';
import {constants} from '../../constants';

const initialState = Map({
    showing: false,
    lost: true,
    round: 1,
    position: 0,
});

const session = (state = initialState, action) => {
    switch (action.type) {
        case constants.session.RESTART:
            return Map({
                showing: true,
                lost: false,
                round: 1,
                position: 0,
            });
        case constants.session.START_SHOWING:
            return state.set('showing', true);
        case constants.session.STOP_SHOWING:
            return state.set('showing', false);
        case constants.session.SET_LOST:
            return state.set('lost', true);
        case constants.session.SET_POSITION:
            return state.set('position', action.payload.position);
        case constants.session.SET_ROUND:
            return state.set('position', 0).set('round', action.payload.round);
        default:
            return state;
    }
};

export default session;

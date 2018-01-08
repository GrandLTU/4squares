import {all, put, select, takeEvery} from 'redux-saga/effects';
import {constants} from '../../../core/constants';
import {setSequence} from "./sequenceActions";
import {delay} from "redux-saga";
import {startShowing, stopShowing} from "../session/sessionActions";
import {activateSquare, deactivateSquare} from "../squares/squaresActions";

function generateSquare(squares) {
    return Math.floor(Math.random() * squares);
}

function generateSequence(squares, size) {
    let sequence = [];

    for (; size > 0; size--) {
        sequence.push(generateSquare(squares));
    }

    return sequence;
}

function* onRestart() {
    const state = yield select();
    const squares = state.squares.size;

    yield put(setSequence(generateSequence(squares, 4)));
}

function* onNextRound() {
    const state = yield select();
    const squares = state.squares.size;
    const sequence = state.sequence.toArray();

    sequence.push(generateSquare(squares));

    yield put(setSequence(sequence));
}

function* onStartShowing({payload: {sequence}}) {
    yield put(startShowing());
    const n = sequence.length;
    const last = n - 1;
    for (let i = 0; i < n; i++) {
        yield put(activateSquare(sequence[i]));
        yield delay(500);
        yield put(deactivateSquare(sequence[i]));
        if (i !== last) {
            yield delay(500);
        }
    }
    yield put(stopShowing());
}

export default function* cardSaga() {
    yield all([
        takeEvery(constants.session.RESTART, onRestart),
        takeEvery(constants.session.SET_ROUND, onNextRound),
        takeEvery(constants.sequence.SET, onStartShowing),
    ]);
}

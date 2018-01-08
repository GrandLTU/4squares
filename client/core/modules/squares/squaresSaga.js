import { takeEvery, all, put, select } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import {setLost, setPosition, setRound} from "../session/sessionActions";
import {delay} from "redux-saga";
import {activateSquare, blinkSquare, deactivateSquare} from "./squaresActions";

function* onClickSquare({ payload: { square } }) {
    const { sequence, session } = yield select();
    let position = session.get('position');
    const expected = sequence.get(position);

    if (expected !== square) {
        yield put(setLost());

        return;
    }

    yield put(blinkSquare(square));

    if (position + 1 < sequence.size) {
        yield put(setPosition(position + 1));
    } else {
        yield delay(500);
        yield put(setRound(session.get('round') + 1));
    }
}

function* onBlinkSquare({ payload: { square } }) {
    yield put(activateSquare(square));
    yield delay(200);
    yield put(deactivateSquare(square));
}

export default function* cardSaga() {
    yield all([
        takeEvery(constants.squares.CLICK, onClickSquare),
        takeEvery(constants.squares.BLINK, onBlinkSquare),
    ]);
}

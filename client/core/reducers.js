import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import squares from './modules/squares/squaresReducer';
import session from "./modules/session/sessionReducer";
import sequence from "./modules/sequence/sequenceReducer";

const rootReducer = combineReducers({
  routing,
  squares,
  session,
  sequence,
});

export default rootReducer;

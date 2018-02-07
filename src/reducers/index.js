import {combineReducers} from 'redux';
import personajes from './personajes_reducer';
import heroes from './heroes_reducer';

const rootReducer = combineReducers({
    personajes,
    heroes
});

export default rootReducer;

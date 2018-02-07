import {AGREGAR_PERSONAJE, ELIMINAR_PERSONAJE} from '../actions';
import {crearPersonaje} from './helpers';

function heroes(state = [], action){
  switch(action.type){
    case AGREGAR_PERSONAJE:
        let heroes = [...state, crearPersonaje(action.id)];
        return heroes;
    case ELIMINAR_PERSONAJE:
        heroes = state.filter(item => item.id !== action.id);
        return heroes;
    default:
        return state;
  }
}

export default heroes;

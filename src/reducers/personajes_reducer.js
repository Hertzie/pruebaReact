import personajes_json from '../data/characters.json';
import {AGREGAR_PERSONAJE, ELIMINAR_PERSONAJE} from '../actions';
import {crearPersonaje} from './helpers';

function personajes(state = personajes_json, action){
  switch(action.type){
    case AGREGAR_PERSONAJE:
      let personajes = state.filter(item => item.id !== action.id);
      return personajes;
    case ELIMINAR_PERSONAJE:
      personajes = [...state, crearPersonaje(action.id)];
      return personajes;
    default:
        return state;
  }
}

export default personajes;

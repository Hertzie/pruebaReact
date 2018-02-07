import personajes_json from '../data/characters.json';

export function crearPersonaje(id){
  let personaje = personajes_json.find(p => p.id === id);
  return personaje;
}

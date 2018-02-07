export const AGREGAR_PERSONAJE = 'AGREGAR_PERSONAJE';
export const ELIMINAR_PERSONAJE = 'ELIMINAR_PERSONAJE';

export function agregarPersonajePorId(id){
  const action = {
    type: AGREGAR_PERSONAJE,
    id
  }
  return action;
}

export function eliminarPersonajePorId(id){
  const action = {
    type: ELIMINAR_PERSONAJE,
    id
  }
  return action;
}

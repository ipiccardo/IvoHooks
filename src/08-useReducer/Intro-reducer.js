// EL REDUCER CAMBIA EL ESTADO SEGÚN LA ACCIÓN QUE RECIBE

// COMO QUIERO QUE SE ENCUENTRE LA APLICACIÖN

export const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
];

// CREO UNA FUNCIÖN CON EL ARGUMENTO INITIALSTATE Y EL ARGUMENTO ACTION

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return state;
};

// CREO UNA VARIABLE QUE SEA IGUAL AL RETURN DE LA FUNCiÖN
let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

// el payload es la action
const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

// A LA VARIABLE YA ASIGNADA, LA IGUALO A LA FUNCIÓN DEL REDUCER Y LE PASO COMO ARGUMENTOS EL ESTADO ANTERIOR, Y EL QUE QUIERO AGREGAR
todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });

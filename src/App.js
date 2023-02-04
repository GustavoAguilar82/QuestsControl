import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './CustomHooks/UseLocalStorage'

const defaultTodos=[
  {text:'Cortar cebolla', completed: true},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];

function App() {

  //la funcion devuelve dos elementos, un estado y una forma de editarlo, y si cargando o no
  const {item: todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);  

  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length; //es falso que no es falso? osea, true
  const totalTodos = todos.length; //estos no están filtrados

  let searchedTodos= [];

  if(!searchValue.length >= 1){  //si no han escrito nada
    searchedTodos = todos;

  } else {
    searchedTodos = todos.filter(todo => {   //llama a cada todo y lo hace miniscula
      const todoTextMinusculas = todo.text.toLowerCase();   //todos los de mi lista sin filtros
      const searchTextMinusculas = searchValue.toLocaleLowerCase();  //el valor que ha buscado

      return todoTextMinusculas.includes(searchTextMinusculas) //retorna los que incluyan la busqueda
    });  
  }



  const togglecompleteTodo = (contenido) => {   //a mi funcion le envio un texto que ya existe
    const todoIndex = todos.findIndex(todo => todo.text === contenido); //donde cohincida, deme el # de index
    const newTodos = [...todos];   //crea una copia igual
    
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;  //y al que tenga ese numero, cambiere el completed por true
    saveTodos(newTodos);  //activo la funcion set todos, enviando la nueva lista que solo tiene un cambio. 
  }

  const deleteTodo = (contenido) => {   //a mi funcion le envio un texto que ya existe
    const todoIndex = todos.findIndex(todo => todo.text === contenido); //donde cohincida, deme el # de index
    const newTodos = [...todos];   //crea una copia igual
    
    newTodos.splice(todoIndex,1); //donde empieza a eliminar, y cuantos desea eliminar
    saveTodos(newTodos);  //activo la funcion set todos, enviando la nueva lista que solo tiene un cambio. 
  }


  return (
    <AppUI
    loading={loading}
    error={error}
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    togglecompleteTodo={togglecompleteTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;

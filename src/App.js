import React from "react";

// Componentes.
import { TodoCounter  } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { TodoForm } from "./components/TodoForm/TodoForm";
//Hooks
import { useLocalStorageHook } from './Hooks/UseLocalStorageHook';
// Modals
import { ModalAdd } from './components/ModalAdd/ModalAdd';

//context
// import { TodoProvider, ContextReact } from "./context";

function App() {

  const {item: todosValue, saveItem: saveTodos, loading, error} = useLocalStorageHook('TODOS_V1', []);
  const [searchNow, setValueSearch] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todosValue.filter(e=> !!e.completed).length;//Asi probamos si es true.
  const totalTodos = todosValue.length;

  let searchedTodos = [];
  if(!searchNow.length >= 1){
    searchedTodos = todosValue;
  }else{
    searchedTodos = todosValue.filter(f=> {
      const todoText = f.text.toLowerCase();
      const searchText = searchNow.toLowerCase();

      return todoText.includes(searchText);

    });
    
  }

  const completeTodo = (text)=>{
    const todoIndex = todosValue.findIndex(e=> e.text === text );
    // todosValue[todoIndex] = {text: todosValue[todoIndex].text, completed: true };
    const newTodos = [...todosValue];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const addTodo = (text)=>{
    // const todoIndex = todosValue.findIndex(e=> e.text === text );
    // todosValue[todoIndex] = {text: todosValue[todoIndex].text, completed: true };
    const newTodos = [...todosValue];
    newTodos.push({completed: false, text});
    saveTodos(newTodos);
  }

  const deleteTodos = (text)=>{
    const todoIndex = todosValue.findIndex(e=> e.text === text );
    // todosValue[todoIndex] = {text: todosValue[todoIndex].text, completed: true };
    const newTodos = [...todosValue];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }



  return (
    // <></>
    <React.Fragment>

      <TodoCounter total={totalTodos} completedTodos={completedTodos} />

      {/* Cuando seteas valores... Lo haces */}
      <TodoSearch  searchNow={searchNow} setValueSearch={setValueSearch} />

      {/* Tenemos que manejar estados dentro de nuestra lista render */}
      <TodoList>

        {loading && <p>Estamos cargando, espera.</p>}
        {error && <p>AAAAAAAAAAAAAAAA</p>}
        {(!loading && searchedTodos.length <= 0) && <p>Crea tu primer TODO!</p>}


        {searchedTodos.map( it=> (

          <TodoItem 
            key={it.text} 
            text={it.text} 
            onComplete={ ()=> completeTodo(it.text) }
            onDelete={()=>deleteTodos(it.text)}
            completed={it.completed}
          />
        ))}

      </TodoList>

      {
        !!openModal && (
          <ModalAdd openModal={openModal} setOpenModal={setOpenModal}>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
          </ModalAdd>
        )
      }

      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />

    </React.Fragment>
  );
}

export default App;
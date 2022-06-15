import React from "react";

import './TodoForm.css'

function TodoForm(props){

    let stateError = false;
    const cancel = ()=>{
        props.setOpenModal( prevState => !prevState );
    }
    const addTodoSubmit = (e)=>{
        e.preventDefault();
        const value = document.getElementById('areaForTodo').value;
        if(value.length > 0){
            stateError = false;
            props.addTodo(value);
        }else{
            stateError = true;
        }
        
    }

    return(
        <>
            <form onSubmit={addTodoSubmit}>
                <h2>Add new Todo.</h2>
                {stateError && <p>Hubo Un Error!!</p>}
                <label form="areaForTodo" >
                    {/* <input type="text" placeholder="Make the supermarket" /> */}
                    <textarea id="areaForTodo" placeholder="Cortar la cebolla para el almuerzo" />
                    <div>
                        <button className="btn_form" type="button" onClick={cancel} >Cancelar</button>
                        <button className="btn_form" type="submit">Añadir</button>
                    </div>
                </label>
            </form>
        </>
    );
}

export {TodoForm}
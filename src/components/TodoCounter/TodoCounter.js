import React from "react";

// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow',
// };

// Para escribir Css mas facil.
import './TodoCounter.css';

function TodoCounter({ total, completedTodos }){

    return(
        <React.Fragment>
            <h2 key={total} className="TodoCounter">Has completado {completedTodos} de {total} TODO's</h2>
        </React.Fragment>
    );
}

export {TodoCounter};
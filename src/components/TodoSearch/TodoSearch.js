import React from "react";
import './TodoSearch.css';

// Componentente de clase
// class Componente extends React.Component{
//     constructor(){
//         this.state = {
//             patito: 'Juan'
//         }
//     }

//     render(){
//         return(
//             <div onClick={()=> this.setState('Enrique')}>{this.state.patito}</div>
//         );
//     }
// }

// Esto es componente de FUNCION con REACT HOOKS.
function TodoSearch( { searchNow, setValueSearch } ){

    const onChangeValueSearch = (event)=>{
        // console.log(event)
        setValueSearch(event.target.value.toString());
    }

    return(
        <React.Fragment>
            <input className="TodoSearch" placeholder="Cebolla" value={searchNow} onChange={onChangeValueSearch} />
        </React.Fragment>
    );
}

export {TodoSearch};
import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props){

    const onClickButton = ()=>{
        // alert('msg');
        // props.setOpenModal(!props.openModal);
        props.setOpenModal( prevState => !prevState );
    }

    return(
        <React.Fragment>
            <button className="CreateTodoButton" 
            onClick={onClickButton}
            >
                +
            </button>
        </React.Fragment>
    );
}

export {CreateTodoButton};
import React from "react";

// const { Provider, Consumer } = React.createContext();
const ContextReact = React.createContext();

const hola = "test";

function TodoProvider(props){
    return(
        <ContextReact.Provider value={{ hola }}>
            {props.children}
        </ContextReact.Provider>
    );
}
export {TodoProvider, ContextReact}
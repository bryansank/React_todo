import React from "react";

function UseLocalStorageHook(itemName, initialValueForLocal, totalTodos){

    const [loading, setLoading ] = React.useState(true);
    const [error, setError ] = React.useState(false);
    const [item, setItem] = React.useState(initialValueForLocal);

    //Antes de RENDER se hace esto... Pero, si le colocamos [] se ejecuta n veces.
    React.useEffect( ()=> {
      // console.log('use effect');
      try {
        setTimeout(() => {
        
          const localStorageItem = localStorage.getItem(itemName);
          let parseItem;
        
          // Verified
          if(!localStorageItem){
            // localStorage.setItem('TODOS_V1', JSON.stringify([]));
            localStorage.setItem(itemName, JSON.stringify(initialValueForLocal));
        
            parseItem = [];
          }else{
            parseItem = JSON.parse(localStorageItem);
          }
        
          setItem(parseItem);
          setLoading(false);
  
        }, 1200);
      } catch (error) {
        setLoading(true);
      }
    }, [totalTodos]);

    //Despues de RENDER se hace esto.
    // React.useLayoutEffect()
  
    const saveItem = (newTodos)=>{
      try {
        const stringifiedTodos = JSON.stringify(newTodos);
        localStorage.setItem(itemName, stringifiedTodos);
        setItem(newTodos);
      } catch (error) {
        setLoading(true);
      }
    }
  
    return {item, saveItem, loading, error};
}

export {UseLocalStorageHook as useLocalStorageHook}
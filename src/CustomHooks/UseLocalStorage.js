import React, {useState} from 'react';

//funcion Custom Hook para guardar en local Storage
function useLocalStorage(itemName, initialValue){  //nombre del elemento que queremos guardar en LocalStorage
  
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] =React.useState(initialValue);  //en los custom hook se pueden llamar los react Use oficiales

    React.useEffect(()=>{
        setTimeout(()=>{
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
              
                if(!localStorageItem){  //si está vacio
                  localStorage.setItem('itemName', JSON.stringify(initialValue));  //madele en string un array vacio a mi itemName
                  parsedItem = initialValue;    //esto no es para local storage si no para mí, un array vacio
                } else {
                  parsedItem = JSON.parse(localStorageItem);  //si ya tiene algo, pues, debe ese algo en JS
                }
    
                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                
            }
        }, 1000)
    });
  
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);    //simplemente me guarda los cambios en localS
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);                                  //uso setTodos para ejecutar los cambios
    };

    return {item, //recibe el elemento a guardar
      saveItem, //guarda dicho elemento
      loading,
    };  
}

export {useLocalStorage};

import React from "react";

// *Custom React-Hook*****************************************************
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    // aqui metimos un temporizador para simular la carga del programa
    // con esto podemos evaluar el loading, el error en la App UI
    setTimeout(() => {
      //*LOCAL STORAGE :
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          console.log("No existen item");
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = JSON.parse(localStorageItem);
        } else {
          console.log("Ya existe almacenamiento en localStorage");
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 1000);
  }, []);

  //*funcion puente para guardar con localStorage---------------------
  const saveItem = (newItems) => {
    try {
      const stringifiedItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifiedItems);
      setItem(newItems);
    } catch (error) {
      setError(true);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

import { useState } from "react";

// Definimos el dato de salida
type UseLocalStorageReturnType<T> = [T | undefined, (value: T) => void, () => void];

function useLocalStorage<T>(key: string, initialValue?: T): UseLocalStorageReturnType<T> {

  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, removeValue];
}

export default useLocalStorage;

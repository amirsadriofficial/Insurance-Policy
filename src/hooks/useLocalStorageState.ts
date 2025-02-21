import { useState } from "react";

export default function useLocalStorageState<T>(
  key: string,
  initialValue: T
): [T, (x: T) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const item = window?.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  const setValue = (value: T): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined")
        window?.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
}

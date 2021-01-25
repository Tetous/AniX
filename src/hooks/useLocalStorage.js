import { useEffect, useState } from "react";

export default function useLocalStorage(defaultVal, key) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);

    return item !== null ? JSON.parse(item) : defaultVal;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

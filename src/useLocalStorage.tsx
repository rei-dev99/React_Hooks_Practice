import React, { useState, useEffect } from 'react'

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = window.localStorage.getItem(key);
    if(jsonValue != null) return JSON.parse(jsonValue); //jsonを復元する解読

    return defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, setValue]);

  return [value, setValue];
};

export default useLocalStorage;
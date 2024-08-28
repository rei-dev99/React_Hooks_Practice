import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createContext } from 'react';

const reicodeInfo = { // データを定義して渡すuseContextで使う
  name: "reicode",
  age: 21,
};

const reicodeContext = createContext(reicodeInfo);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <reicodeContext.Provider value={reicodeInfo}>
      <App />
    </reicodeContext.Provider>
  </StrictMode>,
);

export default reicodeContext;

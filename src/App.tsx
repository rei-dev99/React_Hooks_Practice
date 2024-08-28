import './App.css'
import { useEffect, useState, useContext, useRef, useReducer, useMemo } from 'react';
import reicodeContext from './main';

import someChild from './someChild';

import useLocalStorage from './useLocalStorage';

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [number, setNumber] = useState(0);
  const reicodeInfo = useContext(reicodeContext);
  const Ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    console.log("hello");
    // setNumber(number + 1);
  }, [number]);

  const handleRef = () => {
    // console.log(Ref.current.value);
    // console.log(Ref.current.offset);
  };

  // useMemo
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  // const square = () => {
  //   let i=0;
  //   while(i<200000000) {
  //     i++;
  //   }
  //   return count02 * count02;
  // }
  const square = useMemo(() => {
    let i=0;
    while(i<2000000000) {
      i++;
    }
    return count02 * count02;
  }, [count02]);

  const [counter, setCounter] = useState(0);

  // const showCount = () => {
  //   alert("思い処理");
  // }


  // カスタムフック
  const [age, setAge] = useLocalStorage("age", 21);


  return (
    <div className='App'>
      <h1>UseState, UseEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{number}</p>

      <hr />
      <h1>useContext</h1>
      <p>{reicodeInfo.name}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={Ref} />
      <button onClick={handleRef}>UseRef</button>

      <hr />
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "increment"})}>-</button>

      <hr />
      <h1>useMemo</h1>
      <p>カウント1：{count01}</p>
      <p>カウント2：{count02}</p>
      <p>結果：{square}</p>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <button onClick={() => setCount02(count02 + 1)}>+</button>

      <hr />
      <h1>useCallBack</h1>
      {/* <someChild showCount={showCount} /> */}

      <hr />
      <h1>カスタムフック</h1>
      <p>{age}</p>
      <button onClick={() => setAge(80)}>年齢をセット</button>
    </div>
  );
};

export default App;
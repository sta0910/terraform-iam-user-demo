import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, incrementByAmount } from './redux/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(0)
  return (
    <div className='App'>
      <h1>count: {count}</h1>
      <input onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount} />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button 
      onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>追加</button>
    </div>
  );
}

export default App;

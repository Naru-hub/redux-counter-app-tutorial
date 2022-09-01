import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";

function App() {
  // 状態にアクセスするためのHooks
  const count = useSelector((state) => state.counter.value);
  // ActionをStoreに通知するためのHooks
  const dispatch = useDispatch();

  // 入力された値の分をたすための入力値の監視
  const [incrementAmount, setIncrementAmount] = useState("2");
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <input
        onChange={(e) => setIncrementAmount(e.target.value)}
        value={incrementAmount}
      />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>−</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        追加
      </button>
    </div>
  );
}

export default App;

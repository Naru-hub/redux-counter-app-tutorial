import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment } from "./redux/counterSlice";

function App() {
  // 状態にアクセスするためのHooks
  const count = useSelector((state) => state.counter.value);
  // ActionをStoreに通知するためのHooks
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={() => dispatch(increment())}>＋</button>
    </div>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { decrement, increment, incrementByValue } from "../reducers/reward.reducer";

const Reward = () => {
    const {amount} = useSelector(state => state.account);
    const {points} = useSelector(state => state.reward);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();

  return (
    <div className='card'>
        <div className="container">
            <h4>Account Component</h4>
            <h3>Amount: {amount}</h3>
            <h3>Reward Points: {points}</h3>
            <button onClick={() => dispatch(increment())}>Increment +</button>
            <button onClick={() => dispatch(decrement())}>Decrement -</button>
            <input type="text" onChange={(e) => setValue(+e.target.value)}/>
            <button onClick={() => dispatch(incrementByValue(value))}>Increment by {value}</button>
        </div>
    </div>
  )
}

export default Reward
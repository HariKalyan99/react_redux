import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "../slices/accountSlice";
import { useState } from "react";

const Account = () => {
    const {amount} = useSelector(state => state.account);
    const {points} = useSelector(state => state.bonus);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();

  return (
    <div className='card'>
        <div className="container">
            <h4>Account Component</h4>
            <h3>Amount: {amount}</h3>
            <h3>Bonus Points: {points}</h3>
            <button onClick={() => dispatch(increment())}>Increment +</button>
            <button onClick={() => dispatch(decrement())}>Decrement -</button>
            <input type="text" onChange={(e) => setValue(+e.target.value)}/>
            <button onClick={() => dispatch(incrementByAmount(value))}>Increment by {value}</button>
        </div>
    </div>
  )
}

export default Account
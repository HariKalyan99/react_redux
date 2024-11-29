import { useDispatch, useSelector } from "react-redux"
import { decrement, getProdyctById, increment, incrementByAmount } from "../slices/accountSlice";
import { useState } from "react";

const Account = () => {
    const {amount} = useSelector(state => state.account);
    const {points} = useSelector(state => state.bonus);
    const {product, error, pending} = useSelector(state => state.account);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();

  return (
    <div className='card'>
        <div className="container">
            <h4>Account Component</h4>
            <h3>Amount: {amount}</h3>
            {pending ? <h2>Loading...</h2> : error ? <h3>Error in fetching</h3> :  <h3>Product: {product}</h3>}
            <h3>Bonus Points: {points}</h3>
            <button onClick={() => dispatch(increment())}>Increment +</button>
            <button onClick={() => dispatch(decrement())}>Decrement -</button>
            <input type="text" onChange={(e) => setValue(+e.target.value)}/>
            <button onClick={() => dispatch(incrementByAmount(value))}>Increment by {value}</button>
            <button onClick={() => dispatch(getProdyctById(value))}>get product {value}</button>

        </div>
    </div>
  )
}

export default Account
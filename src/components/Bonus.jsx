import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slices/bonusSlice';

const Bonus = () => {
    const {amount} = useSelector(state => state.account);
    const {points} = useSelector(state => state.bonus);

    const dispatch = useDispatch();
  return (
    <div className='card'>
        <div className="container">
        <h3>Points: {points}</h3>
        <h3>Amount: {amount}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        </div>

    </div>
  )
}

export default Bonus
import Account from "./components/Account"
import Bonus from "./components/Bonus"
import { useSelector } from "react-redux";
import Reward from "./components/Reward";

function App() {
  const {amount} = useSelector(state => state.account);
  const {points} = useSelector(state => state.bonus);

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Curent Amount: {amount}</h3>
      <h3>Total Bonus: {points}</h3>

      <Account />
      <Bonus />
      <Reward />
    </div>
  )
}

export default App

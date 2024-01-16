import InitScreen from '@/components/InitScreen'
import FinalScreen from '@/components/FinalScreen'
import { useGameStore } from '@/store/gameStore';


const Game = () => {
  const usersChoice = useGameStore(state => state?.usersChoice)

  return (usersChoice===null) ? 
    <InitScreen/>
    :
    <FinalScreen/>
 
}
export default Game
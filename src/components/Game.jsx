import InitScreen from '@/components/InitScreen'
import FinalScreen from '@/components/FinalScreen'
import { useGameStore } from '@/store/gameStore'

const Game = () => {
  const userPicked = useGameStore(state => state?.userPicked)

  return (userPicked === null)
    ? <InitScreen />
    : <FinalScreen />
}
export default Game

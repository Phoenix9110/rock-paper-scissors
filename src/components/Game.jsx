import {useState} from 'react';
import InitScreen from '@/components/InitScreen'
import FinalScreen from '@/components/FinalScreen'


const Game = () => {
  const [usersChoice, setUsersChoice] = useState(null);
  const handleUsersChoice = (selection) => {
    setUsersChoice(selection)
  }
  const playAgain = () => {
    setUsersChoice(null)
  }
  return (usersChoice===null) ? 
    <InitScreen handleUsersChoice={handleUsersChoice}/>
    :
    <FinalScreen usersChoice={usersChoice} handlePlayAgain={()=> playAgain}/>
 
}
export default Game
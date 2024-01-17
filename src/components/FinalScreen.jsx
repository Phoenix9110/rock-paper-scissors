import { useState, useEffect } from "react";
import Options from "./Options";
import {OPTIONS, WINSCENARIOS} from '@/constans'
import { useGameStore } from "@/store/gameStore";

const FinalScreen = () => {
  const usersChoice = useGameStore(state => state.usersChoice)
  const setUsersChoice = useGameStore(state => state.setUsersChoice)
  const result = useGameStore(state => state.result)
  const setResult = useGameStore(state => state.setResult)
  const housePicked = useGameStore(state => state.housePicked)
  const setHousePicked = useGameStore(state => state.setHousePicked)
  const score = useGameStore(state => state.score)
  const setScore = useGameStore(state => state.setScore)
  const [didUserWin, setDidUserWin] = useState(null)
  const handlePlayAgain = () => {
    setHousePicked(null)
    setResult(null)
    setUsersChoice(null)
  }

  let usersChoiceClass = OPTIONS.find((element) => element.selection === usersChoice)

  useEffect(() => {
    const timer = setTimeout(() => {
      const indexChoice = Math.floor(Math.random() * 5)
      setHousePicked(OPTIONS[indexChoice])
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if(housePicked){
      const usersPicked = usersChoiceClass.selection
      let usersWinScenario = WINSCENARIOS.find((scenario) => scenario.win === usersPicked)
      let houseWinScenario = WINSCENARIOS.find((scenario) => scenario.win === housePicked.selection)

      if(usersWinScenario.lose === housePicked.selection){
        setResult('YOU WIN')
        const newScore = score + 1
        setScore(newScore)
        setDidUserWin(true)
      }else if(houseWinScenario.lose === usersPicked){
        setResult('YOU LOSE')
        setDidUserWin(false)
      }else{
        setResult("IT'S A DRAW")
      }
    }
  }, [housePicked]);



    return(
        <section className="flex flex-1 gap-3 flex-wrap justify-center items-center">
          <section className={`scale-75 sm:scale-100 sm:order-1 flex 
            flex-col-reverse sm:block ${!didUserWin ? 'z-10' : ''}`}>
            <p className="text-center mt-8 sm:mb-8 sm:mt-0 text-lg sm:text-sm tracking-widest relative z-20">YOU PICKED</p>
            <Options selection={usersChoice} customClass={usersChoiceClass.customClass} shadow={usersChoiceClass.boxShadow} winnerShadow={result === 'YOU WIN' ? true : false}/>
          </section>
          {result &&
            <section className="sm:order-2 order-3 w-72 sm:w-52 flex flex-col items-center justify-center relative z-20 sm:px-8">
              <h3 className="sm:text-3xl text-6xl mb-3">{result}</h3>
              <button className="bg-white rounded-md text-BackgroundGradientEnd text-base sm:text-xs w-52 py-2 px-4 sm:w-40 sm:p-2 tracking-widest" onClick={() => handlePlayAgain()}>PLAY AGAIN</button>
            </section>
          }
          <section className={`scale-75 sm:scale-100 sm:order-3 flex 
            flex-col-reverse sm:block ${didUserWin ? 'z-10' : ''}`}>
            <p className="text-center mt-8 sm:mb-8 sm:mt-0 text-lg sm:text-sm tracking-widest relative z-20">THE HOUSE PICKED</p>
            
              <section className={housePicked ? "" : "animate-pulse "}>
                <Options {...housePicked} shadow={housePicked?.boxShadow} winnerShadow={result === 'YOU LOSE' ? true : false}/>
              </section>
            
            
          </section>
        </section>
    )
}
export default FinalScreen
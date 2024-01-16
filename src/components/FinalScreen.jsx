import { useState, useEffect } from "react";
import Options from "./Options";
import {OPTIONS, WINSCENARIOS} from '@/constans'

const FinalScreen = ({usersChoice, handlePlayAgain}) => {
  let usersChoiceClass = OPTIONS.find((element) => element.selection === usersChoice)
  const [result, updateResult] = useState(null)
  const [housePicked, updateHousePicked] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const indexChoice = Math.floor(Math.random() * 5)
      updateHousePicked(OPTIONS[indexChoice])
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if(housePicked){
      const usersPicked = usersChoiceClass.selection
      let usersWinScenario = WINSCENARIOS.find((scenario) => scenario.win === usersPicked)
      let houseWinScenario = WINSCENARIOS.find((scenario) => scenario.win === housePicked.selection)

      if(usersWinScenario.lose === housePicked.selection){
        updateResult('YOU WIN')
      }else if(houseWinScenario.lose === usersPicked){
        updateResult('YOU LOSE')
      }else{
        updateResult("IT'S A DRAW")
      }
    }
  }, [housePicked]);



    return(
        <section className="flex flex-1 gap-3 justify-center items-center">
          <section className="w-min-24">
            <p className="text-center mb-8 text-sm tracking-widest">YOU PICKED</p>
            <Options selection={usersChoice} customClass={usersChoiceClass.customClass} shadow={usersChoiceClass.boxShadow} winnerShadow={result === 'YOU WIN' ? true : false}/>
          </section>
          {result &&
            <section className="w-52 flex flex-col items-center justify-center relative z-20">
              <h3 className="text-3xl mb-3">{result}</h3>
              <button className="bg-white rounded-md text-BackgroundGradientEnd text-xs w-40 p-2 tracking-widest" onClick={handlePlayAgain()}>PLAY AGAIN</button>
            </section>
          }
          <section>
            <p  className="text-center mb-8 text-sm tracking-widest">THE HOUSE PICKED</p>
            
              <section className={housePicked ? "" : "animate-pulse "}>
                <Options {...housePicked} shadow={housePicked?.boxShadow} winnerShadow={result === 'YOU LOSE' ? true : false}/>
              </section>
            
            
          </section>
        </section>
    )
}
export default FinalScreen
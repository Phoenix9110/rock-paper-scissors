import { useState, useEffect } from 'react'
import { THROW_OPTIONS, WINSCENARIOS, MATCH_RESULT_MESSAGE } from '@/constans'
import { useGameStore } from '@/store/gameStore'
import ThrowDisplay from './ThrowDisplay'

const FinalScreen = () => {
  const userPicked = useGameStore(state => state.userPicked)
  const setUserPicked = useGameStore(state => state.setUserPicked)
  const matchResult = useGameStore(state => state.matchResult)
  const setMatchResult = useGameStore(state => state.setMatchResult)
  const housePicked = useGameStore(state => state.housePicked)
  const setHousePicked = useGameStore(state => state.setHousePicked)
  const score = useGameStore(state => state.score)
  const setScore = useGameStore(state => state.setScore)
  const [didUserWin, setDidUserWin] = useState(null)
  const handlePlayAgain = () => {
    setHousePicked(null)
    setMatchResult(null)
    setUserPicked(null)
  }

  const userPickedAttributes = THROW_OPTIONS.find((throwAttributes) => throwAttributes.selection === userPicked)

  useEffect(() => {
    const timer = setTimeout(() => {
      const indexChoice = Math.floor(Math.random() * 5)
      setHousePicked(THROW_OPTIONS[indexChoice])
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (housePicked) {
      const usersWinScenario = WINSCENARIOS.find((scenario) => scenario.win === userPicked)
      const houseWinScenario = WINSCENARIOS.find((scenario) => scenario.win === housePicked.selection)

      if (usersWinScenario?.lose === housePicked.selection) {
        setMatchResult(1)
        const newScore = score + 1
        setScore(newScore)
        setDidUserWin(true)
      } else if (houseWinScenario?.lose === userPicked) {
        setMatchResult(2)
        setDidUserWin(false)
      } else {
        setMatchResult(3)
      }
    }
  }, [housePicked])
  console.log(MATCH_RESULT_MESSAGE[matchResult])
  return (
    <section className='flex flex-1 gap-3 flex-wrap justify-center items-center'>
      <section className={`scale-75 sm:scale-100 sm:order-1 flex 
            flex-col-reverse sm:block ${!didUserWin ? 'z-10' : ''}`}
      >
        <p className='text-center mt-8 sm:mb-8 sm:mt-0 text-lg sm:text-sm tracking-widest relative z-20'>YOU PICKED</p>
        <ThrowDisplay selection={userPicked} customClass={userPickedAttributes?.customClass} shadow={userPickedAttributes?.boxShadow} winnerShadow={matchResult === 1} />
      </section>
      {matchResult &&
        <section className='sm:order-2 order-3 w-72 sm:w-52 flex flex-col items-center justify-center relative z-20 sm:px-8'>
          <h3 className='sm:text-3xl text-6xl mb-3'>{MATCH_RESULT_MESSAGE[matchResult - 1]}</h3>
          <button className='bg-white rounded-md text-BackgroundGradientEnd text-base sm:text-xs w-52 py-2 px-4 sm:w-40 sm:p-2 tracking-widest' onClick={() => handlePlayAgain()}>PLAY AGAIN</button>
        </section>}
      <section className={`scale-75 sm:scale-100 sm:order-3 flex 
            flex-col-reverse sm:block ${didUserWin ? 'z-10' : ''}`}
      >
        <p className='text-center mt-8 sm:mb-8 sm:mt-0 text-lg sm:text-sm tracking-widest relative z-20'>THE HOUSE PICKED</p>
        <section className={housePicked ? '' : 'animate-pulse '}>
          <ThrowDisplay {...housePicked} shadow={housePicked?.boxShadow} winnerShadow={matchResult === 2} />
        </section>

      </section>
    </section>
  )
}
export default FinalScreen

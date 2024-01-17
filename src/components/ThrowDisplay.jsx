import { useGameStore } from '@/store/gameStore'

const Options = ({ selection, customClass = '', shadow = 'shadow-transparent', winnerShadow = false }) => {
  const setUserPicked = useGameStore(state => state.setUserPicked)
  const userPicked = useGameStore(state => state.userPicked)

  const handleUsersChoice = (selection) => {
    setUserPicked(selection)
  }

  const sizeOuterRing = (userPicked)
    ? ` w-[170px] h-[170px] p-[19px] shadow-outer-down ${shadow} `
    : ' w-[97px] h-[97px] hover:scale-110 transition-transform '

  customClass += sizeOuterRing

  const innerClass = (userPicked)
    ? 'bg-slate-200 w-[130px] h-[130px] p-[39px] rounded-full shadow-inner-top shadow-slate-500/30'
    : 'bg-white w-20 h-20 p-6 rounded-full'

  return (
    <section className={winnerShadow ? ' rounded-full shadow-outer-down-winner relative z-10' : ''}>
      <section className={customClass} onClick={() => handleUsersChoice(selection)}>
        <div className={innerClass}>
          <img src={`./icons/${selection}.svg`} alt='' />
        </div>
      </section>
    </section>

  )
}
// TODO: instead type === 'initDisplay' just check if users already made a move
// TODO: move shadow and winnerShadow to states ?

export default Options

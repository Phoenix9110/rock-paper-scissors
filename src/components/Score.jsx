import { useGameStore } from '@/store/gameStore'

const options = [
  'rock',
  'paper',
  'scissors',
  'lizard',
  'spock'
]

const Score = () => {
  const score = useGameStore(state => state.score)

  return(
    <article className="border-2 border-HeaderOutline rounded-xl w-full sm:w-1/2 flex flex-row items-center justify-between p-4 py-2 sm:ml-5">
      <section className="uppercase sm:text-[1.155rem] text-sm font-semibold leading-none ml-2">
        {options.map((option) => <p key={option}>{option}</p>)}
      </section>
      <section className="bg-white rounded-lg px-10 py-4">
        <p className="text-xs text-center font-semibold tracking-widest text-ScoreText">SCORE</p>
        <p className="text-5xl font-bold tracking-normal text-HeaderOutline text-center">{score}</p>
      </section>
    </article>
  )
}
export default Score
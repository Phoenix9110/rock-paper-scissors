import { useGameStore } from "@/store/gameStore"
const Options = ({selection, customClass="", type='finalDisplay', shadow='shadow-transparent', winnerShadow=false}) => {
    const setUsersChoice = useGameStore(state => state.setUsersChoice)
    const handleUsersChoice = (selection) => {
        setUsersChoice(selection)
    } 
    const housePicked = useGameStore(state => state.housePicked)

    const sizeOuterRing = (type === 'initDisplay') ? 
        ' w-[97px] h-[97px] hover:scale-110 transition-transform ' : 
        ` w-[170px] h-[170px] p-[19px] shadow-outer-down ${shadow} `


    customClass += sizeOuterRing


    const innerClass = (type === 'initDisplay') ? 
        'bg-white w-20 h-20 p-6 rounded-full' :
        'bg-slate-200 w-[130px] h-[130px] p-[39px] rounded-full shadow-inner-top shadow-slate-500/30' 

    return(
        <section className={winnerShadow ? ' rounded-full shadow-outer-down-winner relative z-10' : ''}>
            <section className={customClass} onClick={()=>handleUsersChoice(selection)}>
                <div className={innerClass}>
                    <img src={`./icons/${selection}.svg`} alt=""/>
                </div>
            </section>
        </section>

    )
}
//TODO: instead type === 'initDisplay' just check if users already made a move
//TODO: move shadow and winnerShadow to states ?
//TODO: rename variables and components ?
// instead Options => Item



export default Options
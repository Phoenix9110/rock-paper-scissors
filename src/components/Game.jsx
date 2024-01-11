import Options from "./Options";

const baseClass = "w-[97px] h-[97px] rounded-full p-2 hover:scale-110 transition-transform cursor-pointer bg-gradient-to-r"
const OPTIONS = [
  { type: 'rock',
    customClass : `${baseClass} from-RockGradientStart to-RockGradientEnd`,
    transformClass: "relative md:top-[350px] md:right-[130px]"
  },
  { type: 'paper',
    customClass : `${baseClass} from-PaperGradientStart to-PaperGradientEnd`,
    transformClass: "relative md:top-[60px] md:right-[80px]"
  },
  { type: 'scissors',
    customClass : `${baseClass} from-ScissorsGradientStart to-ScissorsGradientEnd`,
    transformClass: "relative md:bottom-[160px] md:right-[230px]"
  },
  { type: 'spock',
    customClass : `${baseClass} from-SpockGradientStart to-SpockGradientEnd`,
    transformClass: "relative md:bottom-[130px] md:right-[420px]"
  },
  { type: 'lizard',
    customClass : `${baseClass} from-LizardGradientStart to-LizardGradientEnd`,
    transformClass: "relative md:bottom-[35px] md:right-[350px]"
  }
]

const Game = () => {
    return(
        <section class="w-full flex flex-none flex-wrap items-center justify-center mt-10">
          <img
            class="w-full md:w-1/2 max-h-96 max-w-96 "
            src="/icons/bg-pentagon.svg"
            alt=""
            aria-hidden="true"
          />
          <section class="">
            {OPTIONS.map((option)=>{
              return(
                <div key={option.type} class={option.transformClass}>
                  <Options  {...option}/>
                </div>
              )
            })}
          </section>


        </section>
        
    )
}
export default Game
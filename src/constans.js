export const BASECLASSOPTIONS = "rounded-full p-2 cursor-pointer bg-gradient-to-r "
export const OPTIONS = [
  { selection: 'rock',
    customClass : `${BASECLASSOPTIONS} from-RockGradientStart to-RockGradientEnd`,
    transformClass: "relative md:top-[350px] md:right-[130px]",
    boxShadow : 'shadow-red-800'
  },
  { selection: 'paper',
    customClass : `${BASECLASSOPTIONS} from-PaperGradientStart to-PaperGradientEnd`,
    transformClass: "relative md:top-[60px] md:right-[80px]",
    boxShadow : 'shadow-blue-800'
  },
  { selection: 'scissors',
    customClass : `${BASECLASSOPTIONS} from-ScissorsGradientStart to-ScissorsGradientEnd`,
    transformClass: "relative md:bottom-[160px] md:right-[230px]",
    boxShadow : 'shadow-amber-600'
  },
  { selection: 'spock',
    customClass : `${BASECLASSOPTIONS} from-SpockGradientStart to-SpockGradientEnd`,
    transformClass: "relative md:bottom-[130px] md:right-[420px]",
    boxShadow : 'shadow-teal-500/60'
  },
  { selection: 'lizard',
    customClass : `${BASECLASSOPTIONS} from-LizardGradientStart to-LizardGradientEnd`,
    transformClass: "relative md:bottom-[35px] md:right-[350px]",
    boxShadow : 'shadow-violet-800'
  }
]

export const WINSCENARIOS = [
  {
    win: 'rock',
    lose: 'lizard'
  },
  {
    win: 'lizard',
    lose: 'spock'
  },
  {
    win: 'spock',
    lose: 'scissors'
  },
  {
    win: 'scissors',
    lose: 'paper'
  },
  {
    win: 'paper',
    lose: 'rock'
  }
]
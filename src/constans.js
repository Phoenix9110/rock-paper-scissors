export const BASECLASS = 'rounded-full p-2 cursor-pointer bg-gradient-to-r '
export const THROW_OPTIONS = [
  {
    selection: 'rock',
    customClass: `${BASECLASS} from-RockGradientStart to-RockGradientEnd`,
    transformClass: 'relative sm:top-[350px] lg:right-[130px] sm:top-[350px] lg:right-[130px] top-[320px] right-[110px]',
    boxShadow: 'shadow-red-800'
  },
  {
    selection: 'paper',
    customClass: `${BASECLASS} from-PaperGradientStart to-PaperGradientEnd`,
    transformClass: 'relative top-[60px] right-[80px]',
    boxShadow: 'shadow-blue-800'
  },
  {
    selection: 'scissors',
    customClass: `${BASECLASS} from-ScissorsGradientStart to-ScissorsGradientEnd`,
    transformClass: 'relative sm:bottom-[160px] sm:right-[230px] lg:bottom-[160px] lg:right-[230px] bottom-[130px] right-[200px]',
    boxShadow: 'shadow-amber-600'
  },
  {
    selection: 'spock',
    customClass: `${BASECLASS} from-SpockGradientStart to-SpockGradientEnd`,
    transformClass: 'relative sm:bottom-[130px] sm:right-[420px] lg:bottom-[130px] lg:right-[420px] bottom-[130px] right-[310px]',
    boxShadow: 'shadow-teal-500/60'
  },
  {
    selection: 'lizard',
    customClass: `${BASECLASS} from-LizardGradientStart to-LizardGradientEnd`,
    transformClass: 'relative sm:bottom-[35px] sm:right-[350px] lg:bottom-[35px] lg:right-[350px] bottom-[70px] right-[290px]',
    boxShadow: 'shadow-violet-800'
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
export const MATCH_RESULT_MESSAGE = ['YOU WIN', 'YOU LOSE', 'IT\'S A DRAW']

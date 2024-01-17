import Options from "./Options";
import {OPTIONS} from '@/constans'

const InitScreen = () => {

  return(
    <section className=" w-11/12 sm:w-full flex flex-none flex-wrap items-center justify-center mt-10 z-40">
      <img
        className="sm:w-1/2 sm:max-w-96 max-w-72 "
        src="/icons/bg-pentagon.svg"
        alt=""
        aria-hidden="true"
      />
      <section className="w-0">
        {OPTIONS.map((option)=>{
          return(
            <div key={option.selection} className={option.transformClass}>
              <Options key={"Option_"+option.selection} {...option} type='initDisplay'/>
            </div>
          )
        })}
      </section>
    </section>
  )
}
export default InitScreen
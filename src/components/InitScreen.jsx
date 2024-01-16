import Options from "./Options";
import {OPTIONS} from '@/constans'

const InitScreen = () => {

  return(
    <section className="w-full flex flex-none flex-wrap items-center justify-center mt-10">
      <img
        className="w-full md:w-1/2 max-h-96 max-w-96 "
        src="/icons/bg-pentagon.svg"
        alt=""
        aria-hidden="true"
      />
      <section>
        {OPTIONS.map((option)=>{
          return(
            <div key={option.type} className={option.transformClass}>
              <Options key={"Option_"+option.type} {...option} type='initDisplay'/>
            </div>
          )
        })}
      </section>
    </section>
  )
}
export default InitScreen
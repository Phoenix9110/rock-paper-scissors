import ThrowDisplay from './ThrowDisplay'
import { THROW_OPTIONS } from '@/constans'

const InitScreen = () => {
  return (
    <section className=' w-11/12 sm:w-full flex flex-none sm:flex-wrap items-center justify-center mt-10 z-40'>
      <img
        className='sm:w-[385px] sm:max-w-[385px] max-w-72 '
        src='/icons/bg-pentagon.svg'
        alt=''
        aria-hidden='true'
      />
      <section className='w-0'>
        {THROW_OPTIONS.map(throwOption => {
          return (
            <div key={throwOption.selection} className={throwOption.transformClass}>
              <ThrowDisplay key={'Option_' + throwOption.selection} {...throwOption} type='initDisplay' />
            </div>
          )
        })}
      </section>
    </section>
  )
}
export default InitScreen

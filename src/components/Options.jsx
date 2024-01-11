
const Options = ({type, customClass}) => {
    return(
        <section class={customClass}>
            <div class="bg-white w-20 h-20 p-6 rounded-full">
                <img src={`./icons/${type}.svg`} alt=""/>
            </div>
        </section>
    )
}
export default Options
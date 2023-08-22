import Style from "./Fim.module.css"
function Fim(props){
    return(
        <>
            <section className={Style.fim}>
            {props.children}
            </section>
        </>
    )
}
export default Fim;
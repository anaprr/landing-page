import Style from "./Texto.module.css"

function Texto (props){
    return(
        <>
            <section className={Style.texto}>
             <h2>Album song's</h2>
             {props.children}
            </section>
        </>
    )
}
export default Texto;
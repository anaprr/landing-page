import Style from "./Disco.module.css";
function Disco(props){
    return(
        <>
            <figure className={Style.disco}>
                <img src={props.disco} alt="" />
            </figure>
        
        </>
    )
}
export default Disco;
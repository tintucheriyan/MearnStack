import './tile.css'
function Tile(props){
    return(
        <>
        
        <div className="box">
            <h4>heading-{props.heading}</h4><br></br>
            <h2>{props.count}</h2>
            <button className='round' onClick={props.countInc}>Click</button><br/>
            <button onClick={()=>props.changeHeading("Aibel")}>Child Change</button>
        </div>
        </>
    )
        
    
}
export default Tile;
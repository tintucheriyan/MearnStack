import './car.css'
function Car(props){
    return(
        <>
        <div className="box">
         <h2>Car details</h2>
         <p>Name:{props.name}</p>
         <p>Price:{props.price}</p>
         <button onClick={props.priceInc}>click</button>
          <p>Color:{props.color}</p>
        </div>
       
        </>
    )
}

export default Car;
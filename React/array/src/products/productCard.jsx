import './products.css'
function ProductCard(props){
    return(
        <>
        <div className="box" >
        <p>Name:{props.name}</p>
        <p>Price:{props.price}</p>
        <p>Features:</p>
            <ul>
              {
                props.features.map((data,id)=>{
                    return <li key={id}>{data}</li>
                   }
                )}
            </ul>
            
        
        </div>
        </>
    )
}
export default ProductCard;
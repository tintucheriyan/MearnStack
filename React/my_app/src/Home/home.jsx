import './home.css'
function Home(){
    names=["kk","sinu","sali"]
    return(
        <>
        <h2>Welcome to the Home Page</h2>
        {
            names.map((name,index)=>{
                return(<h3 key={index}>{name}</h3>)
            })
        }
        </>
    )
}
export default Home;
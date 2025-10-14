import './login.css'

function click(){
    alert("Login Success")
}
function Login(){
    return(
        <>
        <h2>Login</h2>
        <label for="username">Username</label><br/>
        <input type="password"></input><br/>
        <label for="pasword">Password</label><br/>
        <input type="password"></input><br/><br/>

        forget password ?<br/><br/>

        <button class="buttn2" onClick={click}>Login</button>
        </>
    )
}
export default Login;
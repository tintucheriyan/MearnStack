import './registration.css'
function click(){
    alert("Registration Success")
}
function Registration(){
    return(
      <>
      <h2>Register</h2>
      <form>
        <label for="name">Name</label><br/>
        <input type="text"></input><br/>
        <label for="email">Email</label><br/>
        <input type="text"></input><br/>
        <label for="password">Password</label><br/>
        <input type="text"></input><br/>
        <label for="Cpassword">Confirm Password</label><br/>
        <input type="text"></input><br/><br/>
        <button class="buttn1" onClick={click}>Register</button>
      </form>
      </>
    )
}
export default Registration;
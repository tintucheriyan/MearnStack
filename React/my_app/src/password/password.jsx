import './password.css'
function Password(){
    return(
        <>
        <h2>Forgot Password</h2>
        <div class="form">
        <form id="form1">
        <label for="username">Username</label><br/>
        <input type="text"></input><br/><br/>
        <button class="buttn3">Forgot Password</button>
        </form>

        <form id="form2"> 
        <label for="password">Password</label><br/>
        <input type="text"></input><br/>
        <label for="Cpassword">Confirm Password</label><br/>
        <input type="text"></input><br/><br/>
        <button class="buttn3">Reset Password</button>
        </form>
        </div>
        
        
        </>
    )
}
export default Password
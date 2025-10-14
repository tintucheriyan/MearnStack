
import { Link,Outlet } from "react-router-dom";
function Dashboard(){
    return(
       <>
       <h2>Welcome to Dashboard</h2>
       <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link> |{" "}
       </nav>
       <hr/>
       <Outlet />
       </>
    )
}
export default Dashboard;
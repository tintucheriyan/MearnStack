import './employee.css'
function EmployeeCard(props){
    return(
     <>
     <div className="summary-box">
     <h2>Details</h2>
     <p>Id:{props.id}</p><br></br>
     <p>name:{props.name}</p><br></br>
     <p>role:{props.role}</p><br></br>
     <p>salary:{props.salary}</p><br></br>
     </div>
     </>
    )
}

export default EmployeeCard;
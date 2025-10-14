import EmployeeCard from './employeeCard'
function Employee(){
    const employees = [
                 { id: 1, name: "John", role: "Developer", salary: 50000 },
                 { id: 2, name: "Emma", role: "Designer", salary: 45000 },
                 { id: 3, name: "Raj", role: "Tester", salary: 40000 }];
    return(
        <>
        <h2>Employee details</h2>
        <div>
           {employees.map(data=><EmployeeCard   id={data.id} name={data.name} role={data.role} salary={data.salary}/>

           ) 
           }
            
        </div>
        </>
    )
}
export default Employee;
import './table.css'
import { useState } from "react";

function Array() {
 const names=['kk','mm','zz']
 const [name,setName]=useState(['Anu','Balu','Mili'])
 const [users,setUsers]=useState([{name:"Ami",age:30,mark:50},{name:"Malu",age:28,mark:25},{name:"Renu",age:40,mark:30}])
 

return(
<>
<h2>Welcome</h2>
<div>Names:




{
    names.map((a,index)=>(<li key={index}>{a}</li>))


}
</div>


<table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        names.map((name, ind) => (
                            <tr key={ind}>
                                <td>{ind}</td>
                                <td>{name}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
  
<table className="table2">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Mark</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, ind) => (
                            <tr key={ind}>
                                <td>{ind}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.mark}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
  
   
</>
)
}
export default Array;

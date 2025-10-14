//import './summary.css';
// function Summary(props){
//     return(
//         <>
//         <div className="summary-box">
//         <h2>Summary</h2>
//         summary of {props.batch} - {props.rating}
//         </div>
//         </>
//     )
// }

// export default Summary;


// function Reports() {
//   return (
//     <>
//     <h2>REPORTS</h2>
//     <div style={{ display: "flex" }}>
//       <Summary  courseDuration={"4 months"} noOfStudents={15} batch={"MERN"} + />
//       <Summary courseDuration={"4 months"} noOfStudents={13} batch={"DM"}  />
//       <Summary courseDuration={"4 months"} noOfStudents={20} batch={"Accounts"}  />
//     </div>
//     </>
    
//   );
// }


import './summary.css'

//using props
function Summary(props){
    return(
        <>
        <div className="summary-box">
        <h3>Summary of {props.batch}</h3>
         <p>No of students:<b>{props.noOfStudents}</b></p>  
         <p>Course Duration:<b>{props.courseDuration}</b></p>
        </div>
        
        </>
    )

}

//without using props


// function Summary({noOfStudents,batch,courseDuration}){
//     return(
//         <>
//         <div className="summary-box">
//            <h3>Summary of {batch}</h3>
//           <p>No of students:<b>{noOfStudents}</b></p> 
//           <p> Course Duration:<b>{courseDuration}</b></p>
      
//         </div>
        
//         </>
//     )

// }

export default Summary
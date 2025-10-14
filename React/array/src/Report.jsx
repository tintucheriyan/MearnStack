// import Summary from "./Summary";
// function Report(){
//     return(
//         <>
//         <h2>Reports</h2>
        
//              <Summary rating={4.5} no={15} batch="MERN"></Summary>
        
       
//         </>
//     )
// }

// export default Report;

import Summary from "./Summary";
function Reports(){
    const reportData= [
    { 
      batch: "MERN",
      noOfStudents: 15 ,
      courseDuration:"4 months"
     },
    { 
    batch: "DM",
     noOfStudents: 13,
    courseDuration:"4 months"
    },
    { 
    batch: "Accounts",
     noOfStudents: 20,
    courseDuration:"4 months" 
    },
  ];
    return(
        <>
        <h2>REPORTS</h2>
        <div style={{ display: "flex" }}>
            {
                reportData.map(data=>
                  <Summary  courseDuration={data.courseDuration} noOfStudents={data.noOfStudents} batch={data.batch}  />
               
                )
            }

        </div>
        </>
    )
}
export default Reports;
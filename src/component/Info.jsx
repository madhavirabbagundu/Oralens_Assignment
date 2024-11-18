import React from "react";
function Info(){
    const [info,setInfo] = React.useState([])


    React.useEffect(()=>{
    fetch(`http://localhost:3000/items`)
    .then((res)=>res.json())
    .then((json)=>setInfo(json))
    },[])
    console.log(info)
    return(
        <>
          <div>
             <h1>INFORMATION</h1>
               <table>
                     <thead>
                             <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>File</th>
                             </tr>
                      </thead>
                      <tbody>
                            {
                              info.map((item)=>(
                               <tr key = {item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                     <td>{item.file === "" ? "Not Uploaded" : "uploaded"}</td>
                                  </tr>
                                 )
                                )
                            }
                      </tbody>
                  </table>    
            </div>
        
        </>
    )
}
export {Info}
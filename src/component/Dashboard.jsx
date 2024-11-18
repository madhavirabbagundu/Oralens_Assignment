import React from 'react'
import { Info } from './Info'

function Dashboard(){
    const [data,setData] = React.useState({
        name : "",
        age  : "",
        file  : ""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({...data,[name]:value})
    }
const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(data)
}
const AddInfo = () =>{
    if(data.age <= 100){
    fetch(`http://localhost:3000/items`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "content-type":"application/json"
        }
    })
    .then((res)=>res.json())        
    .then((res)=>console.log(res));
   }
   else{
    alert("Please Check your Age")
   }
}
     const {name,age,file} = data;
    return(
        <>
        <div className='MainContainer'>
            <div>
        <form onSubmit = {handleSubmit} className='container'>
          <label className = "heading">Enter Your Name    : </label> 
           <input type = "text"
           className='inputBoxes'
            placeholder='Enter Your Name'
            name = "name"
            value = {name}
            onChange =  {handleChange} 
            required
            />
            <br/>

            <label className = "heading">Enter Your Age : </label> 
             <input type = "number"
            className='inputBoxes'
            placeholder='Enter Your Age'
            name = "age"
            value = {age}
            onChange =  {handleChange} 
            required

            />
            <br/>

            <input type = "file"
            className='file'
            name = "file"
            value = {file}
             onChange =  {handleChange} 
            />
            <br/>

            <button type = "submit" 
            value = "submit"
            className='SubmitButton'
            onClick={AddInfo}>
            Submit</button>
        </form>
        </div>
       <Info />
        </div>
        </>
    )
}
export { Dashboard }
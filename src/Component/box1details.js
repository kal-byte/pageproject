import { useEffect, useState } from "react";

function Boxdetails1 (){
    
   
    const[data,setdata]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then(r=>r.json()) //response
        .then(response=>{
            setdata(response)
           
            console.log(response)})

        
        .catch(e=>alert('fetch error:'+e));
    },[])

           
        
 



    return(
        <div>
            <h1>Detaills </h1>
            <table border="1px" cellpadding="1px" cellspacing="1px">
                    
            {data. map((obj,index)=>(
                            <tr>
                                <td>{obj.id}</td>
                                <td>{obj.Model}</td>
                            </tr>
                             ))}
             </table>
                                
              
  
    </div>
    )
};

export default Boxdetails1; //exported
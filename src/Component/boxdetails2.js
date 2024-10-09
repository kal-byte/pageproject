import React from "react";

class Boxdetails2 extends React.Component{
    constructor(){
        super();
        this.state={
          Productlist:[]  
        }
        this.getAllbox2=this.getAllbox2.bind(this)


    }

    
        getAllbox2(){
        fetch('http://localhost:3000/products')
        .then(r=>r.json()) //response
        .then(response=>{
           this.setState({Productlist:response})
           console.log(response)
        }
    )
        .catch(e=>alert("error"))//error
           
        
    }










    render(){
        return(
            <div>
             <h1>Detaills</h1>
                <table border="1px" cellPadding="1px" cellSpacing="1px">
                    
                        {this.state.Productlist. map((obj,index)=>(
                            <tr>
                                <td>{obj.id}</td>
                                <td>{obj.Title}</td>
                                <td>{obj.Model}</td>
                                <td>{obj.MadeBy}</td>
                                <td>{obj.Price}</td>
                                <td>{obj.someinfoaboutproduct}</td>
                            </tr>
                             ))}
                </table>
             </div>
        )
    }
   
componentDidMount()
{
   this.getAllbox2();
};
};
export default Boxdetails2; //exported
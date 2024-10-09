function Boxes(){
    return(<div>
        <div class="container">
  <div class="row">
    <div class="col-md-3" onClick={()=>navigate('/box1')}>
     One  box     
    </div>
    <div class="col-md-3"  onClick={()=>navigate('/box2')}> 
     Two  box
    </div>
    <div class="col-md-3" onClick={()=>navigate('/box3')}>
     Three  box
    </div>
    <div class="col-md-3" onClick={()=>navigate('/box4')}>
     Four  box
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-md-3" onClick={()=>navigate('/box5')}>
     Five  box
    </div>
    <div class="col-md-3" onClick={()=>navigate('/box6')}>
     Six  box
    </div>
    <div class="col-md-3" onClick={()=>navigate('/box7')}>
     Seven  box
    </div>
    <div class="col-md-3" onClick={()=>navigate('/box8')}>
     Seven  box
    </div>
    
  </div>
  
   </div>
   </div>
    
    )
}
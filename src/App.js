
import {Link,Routes,Route, useNavigate} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './Component/product';
import Mycart from './Component/mycart';
import Boxdetails1 from './Component/box1details';
import Boxdetails2 from './Component/boxdetails2';
import Boxdetails3 from './Component/boxdetails3';
import Boxdetails4 from './Component/boxdetails4';
import Boxdetails5 from './Component/boxdetails5';
import Boxdetails6 from './Component/boxdetails6';
import Boxdetails7 from './Component/boxdetails7';
import Boxdetails8 from './Component/boxdetails8';

function App() {

  const navigate=useNavigate();
 


  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      ☎️
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to={'/product'}>Products<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <input type="search" placeholder="Search for products"/>
      </li>
      

    </ul>
    <form>
      <button >
      <Link  class="nav-link"to={'/mycart'}>My Cart</Link>
      </button>
    </form>
    
  </div>
  
 </nav>
 <Routes>
    <Route path='/product' element={<Product></Product>}></Route>
    <Route  path='/mycart' element={<Mycart></Mycart>}></Route> 
    <Route  path='/box1' element={<Boxdetails1></Boxdetails1>}></Route>
    <Route  path='/box2' element={<Boxdetails2></Boxdetails2>}></Route> 
    <Route  path='/box3' element={<Boxdetails3></Boxdetails3>}></Route>  
    <Route  path='/box4' element={<Boxdetails4></Boxdetails4>}></Route> 
    <Route  path='/box5' element={<Boxdetails5></Boxdetails5>}></Route> 
    <Route  path='/box6' element={<Boxdetails6></Boxdetails6>}></Route> 
    <Route  path='/box7' element={<Boxdetails7></Boxdetails7>}></Route> 
    <Route  path='/box8' element={<Boxdetails8></Boxdetails8>}></Route> 
  </Routes>
  
 </div>
 

   
  );
}

export default App;

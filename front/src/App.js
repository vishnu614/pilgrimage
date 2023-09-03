import Register from './components/Register';
import Login from   './components/Login';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cards from './components/card';
import Loginotp from './components/Loginotp';
import Badrinath from './components/videocom/bhadrinath';
import Golden from './components/videocom/golden';
import Shirdi from './components/videocom/shirdi';
import Kedarnath from './components/videocom/kedarnath';
import Somnath from './components/videocom/somnath';
import Tirupathi from './components/videocom/tirupathi';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login'    element={<Login/>}/>
      <Route path='/cards'   element={<Cards/>}/>
      <Route path='/otp'     element={<Loginotp/>}/>
      <Route path='/badri'     element={<Badrinath/>}/>
      <Route path='/gold'     element={<Golden/>}/>
      <Route path='/shirdi'     element={<Shirdi/>}/>
      <Route path='/keder'     element={<Kedarnath/>}/>
      <Route path='/somn'     element={<Somnath/>}/>
      <Route path='/tiru'     element={<Tirupathi/>}/>
      



    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;

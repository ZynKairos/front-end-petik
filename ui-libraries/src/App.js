import './App.css';
import Footer from './component/Footer';
import Home from './pages/Home';
import NavbarComponent from './component/Navbar';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Courses from './pages/Courses';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import Detail from './pages/Detail';
import Dashboard from './pages/Dashboard';
import DetailCourse from './component/DetailCourse';

function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={ <Courses />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/register' element={ <Register />} />
          <Route path='/detail' element={ <Detail />} />
          <Route path='/dashboard' element={ <Dashboard />} />
          <Route path='/course/:id' element={ <DetailCourse />} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
};

export default App;

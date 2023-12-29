import './App.css';
import { Route,  Routes } from "react-router-dom";
import HeaderComponent from './component/Header/HeaderComponent';
// import SignUp from './component/SignUp/SignUp';
import HomePage from './pages/Home/Home';
import NewFooter from './component/Footer/newFooter';
import PricingPage from './pages/Pricing/PricingPage';
import AboutPage from './pages/About/About';
import ContactPage from './pages/Contact/Contact';
import CoursePage from './pages/Course/Course';
import Login from './component/SignUp/Login';



function App() {
  return (
    <div className="App">
       <HeaderComponent/>
       <Routes>
          <Route index   element={<Login/>}/>  
          <Route path='/Home' element={<HomePage/>}/> 
          <Route path='/Pricing' element={<PricingPage/>}/>
          <Route path='/About' element={<AboutPage/>}/>
          <Route path='/Course' element={<CoursePage/>}/>   
          <Route path='/Contact' element={<ContactPage/>}/>      
       </Routes>
       <NewFooter/>
    </div>
  );
}

export default App;

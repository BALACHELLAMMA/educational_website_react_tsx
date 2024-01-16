import './App.css';
import { Route, Routes } from "react-router-dom";
import HeaderComponent from './component/Header/HeaderComponent';
import SignUp from './component/SignUp/SignUp';
import HomePage from './pages/Home/Home';
import NewFooter from '../src/component/Footer/Footer';
import Login from './component/SignUp/Login';
import { AuthProvider } from './utils/AuthContext';
import PrivateRoutes from './utils/PrivateRoutes';
import About from './component/About/About';
import CoursePage from './pages/Course/Course';
import PricingPage from './pages/Pricing/PricingPage';
import ContactPage from './pages/Contact/Contact';
// import RegistrationForm from './ReactForm';




function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <AuthProvider>
          <HeaderComponent />
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route element={<PrivateRoutes/>}>
              <Route path='/signUp' element={<SignUp/>}/>
              <Route path='/Home' element={<HomePage />} />
              <Route path='/Course' element={<CoursePage/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Pricing' element={<PricingPage/>}/>
              <Route path='/Contact' element={<ContactPage/>}/>
            </Route>
          </Routes>
          <NewFooter />
        </AuthProvider>
      {/* </Router> */}
    </div>
  );
}

export default App;

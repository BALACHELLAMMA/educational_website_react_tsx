import './App.css';
import { Route, Routes } from "react-router-dom";
import HeaderComponent from './component/Header/HeaderComponent';
import SignUp from './component/Auth/SignUp';
import HomePage from './pages/Home/Home';
import NewFooter from '../src/component/Footer/Footer';
import Login from './component/Auth/Login';
import { AuthProvider } from './utils/AuthContext';
import PrivateRoutes from './utils/PrivateRoutes';
import About from './component/About/About';
import CoursePage from './pages/Course/Course';
import PricingPage from './pages/Pricing/PricingPage';
import ContactPage from './pages/Contact/Contact';





function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <AuthProvider>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/home' element={<HomePage />} />
            <Route path='/course' element={<CoursePage />} />
            <Route path='/about' element={<About />} />
            <Route path='pricing' element={<PricingPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Route>
        </Routes>
        <NewFooter />
      </AuthProvider>
      {/* </Router> */}
    </div>
  );
}

export default App;

// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CSS
import './App.css';

// Pages
import Homepage from './Pages/Home/Home.page';
import Software from './Pages/Software/Software.page';

// components
import Header from './Components/Header/Header.component';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm.component';
import LoginForm from './Components/LoginForm/LoginForm.component';

function App() {
  return (
    <div className='App'>
      <Header/>
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/software' element={<Software/>}/>
                <Route path='/sign-up' element={<RegistrationForm/>}/>
                <Route path='/login' element={<LoginForm/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';

// components
import Header from './Components/Header/Header.component';
// import RegistrationForm from './Components/RegistrationForm/RegistrationForm.component';
// import LoginForm from './Components/LoginForm/LoginForm.component';
import Homepage from './Pages/Home/Home.page';
import Software from './Pages/Software/Software.page';

function App() {
  return (
    <div className='App'>
      <Header/>
      {/* <RegistrationForm/> */}
      {/* <LoginForm/> */}
      {/* <Homepage/> */}
      <Software/>
    </div>
  );
}

export default App;

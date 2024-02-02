import './App.css';

// components
import Header from './Components/Header/Header.component';
// import RegistrationForm from './Components/RegistrationForm/RegistrationForm.component';
import LoginForm from './Components/LoginForm/LoginForm.component';

function App() {
  return (
    <div className='App'>
      <Header/>
      {/* <RegistrationForm/> */}
      <LoginForm/>
    </div>
  );
}

export default App;

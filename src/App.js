import './App.css';
import Landing from './pages/Landing/Landing';
// import LoginSignup from './pages/LoginSignup/LoginSignup'
// import HomeP from './pages/HomeP/HomeP';
import { createBrowserRouter } from 'react-router-dom';

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomeP/>
  //   },
  //   {
  //     path: '/login',
  //     element: <LoginSignup/>
  //   }
  // ])
  return (
    <div>
      <Landing />
    </div>
  );
}

export default App;

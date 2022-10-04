
import './App.css';

import { Route, Routes } from 'react-router-dom';

import MessagePage from './pages/MessagePage';
import SignUpPage from './pages/SignUpPage';





function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<SignUpPage/>}/>
      <Route path='/messages' element={<MessagePage/>}/>
    
      
      </Routes>
    </div>
  );
}

export default App;

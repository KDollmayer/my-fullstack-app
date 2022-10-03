
import './App.css';

import { Route, Routes } from 'react-router-dom';

import MessagePage from './pages/MessagePage';





function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<MessagePage/>}/>
      <Route path='/messages' element={<MessagePage/>}/>
    
      
      </Routes>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import Upload from './components/Upload';

function App() {
  const[click, setClick] = useState(false)
  const clickOpen = (term)=>{
    setClick(term);
  }
  return (
    <div className="flex items-center bg-slate-100">
      {/* Should use Routing but due to shortage of time using this way */}
      {click || <LoginPage  clickOpen={clickOpen}/>} 
      {click && <Upload  />}
    </div>
  );
}

export default App;

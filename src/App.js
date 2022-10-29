import './App.css';
import Home from './Components/Home';
import Questions from './Components/Questions';
import Result from './Components/Result';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  document.querySelector("body").style.background = "rgba(64,64,122,255)"
  return (
    <div style={{position:"fixed"}}>
     {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
           <Route path="/questions" element={<Questions/>} />
           <Route path='/result' element={<Result/>}/>
      
      </Routes>
    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;

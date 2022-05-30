import { useContext } from "react";
 import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Login from "./pages/login/Login"
import Settings from "./pages/settings/Settings"
import Register from "./pages/register/Register"
import { Context } from "./context/Context";
import {Routes, Route} from 'react-router-dom'


function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Topbar />
      <Routes>
        <Route  path="/" element= {<Home />} />
          
    
        <Route path="/posts"  element= {<Home />} />
          
        
        <Route path="/register" element= {user ? <Home /> : <Register />} />
          
       
        <Route path="/login" element= {user ? <Home /> : <Login />} /> 
        <Route path="/post/:id" element= {<Single />} />
          
        
        <Route path="/write" element= {user ? <Write /> : <Login />} />
        <Route path="/settings" element= {user ? <Settings /> : <Login />} />
          
        
      </Routes>
    </>
  );
}


export default App;
// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="register" element={<Register />} />
//     </Routes>
    
//   );
// }

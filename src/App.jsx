import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Sign from './Component/Sign/Sign';
import Nav from './Component/Nav/Nav';
const App = () => {
  const [isSignIn,setSign] = useState(false);
  return (
    <div>
      {isSignIn?<Sign setSign={setSign}/>:<></>}
      <Nav setSign = {setSign}/>
    <Home/>
    </div>
  )
}

export default App

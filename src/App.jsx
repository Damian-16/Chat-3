import React, { PureComponent } from 'react';
import Navbar from './component/Navbar';
import {ChatContext} from './context/ChatProvider';


function App() {

  const {saludo} = React.useContext(ChatContext)
  const {usuario} = React.useContext(ChatContext)
  return usuario !== null?(
    <div>
      <Navbar/>
   hola 
    </div>
  ):(
    <div>CARGANDOOOO</div>
  )
}

export default App;

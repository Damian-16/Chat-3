import React, { PureComponent } from 'react';
import Chat from './component/Chat';
import Navbar from './component/Navbar';
import {ChatContext} from './context/ChatProvider';


function App() {

  const {saludo} = React.useContext(ChatContext)
  const {usuario} = React.useContext(ChatContext)
  return usuario !== null?(
    <div>
      <Navbar/>
      {
        usuario.estado?(
          <Chat/>
        ):(
          <div className="lead text-center mt-5">
            Debes Iniciar Sesion
          </div>
        )
      }
    </div>
  ):(
    <div>CARGANDOOOO</div>
  )
}

export default App;

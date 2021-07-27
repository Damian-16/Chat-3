import React, { PureComponent } from 'react';
import Navbar from './component/Navbar';
import {ChatContext} from './context/ChatProvider';


function App() {

  const {saludo} = React.useContext(ChatContext)
  return (
    <div>
      <Navbar/>
   hola {saludo}
    </div>
  );
}

export default App;

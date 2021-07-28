import React from 'react'
import Agregar from './Agregar'
import { ChatContext } from '../context/ChatProvider'

const Chat = () => {
    const {mensajes,usuario} = React.useContext(ChatContext)

    const refZonaChat = React.useRef(null)
    React.useEffect(()=>{
        console.log(refZonaChat)
        refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight
    },[mensajes])//cada vez que se actualize mensajes se hara otra comparacion

    return (
        <div className="mt-3 px-2"
        style={{height:'75vh',overflow:'scroll'}}
        ref={refZonaChat}>
            {
                mensajes.map((item,index)=>(
                    usuario.uid === item.uid?(
                        <div className="d-flex justify-content-end mb-2" key={index} >
                            <span className="badge rounded-pill bg-primary"> 
                               {item.texto}
                            </span>
                            </div>):
                            (
                                <div className="d-flex justify-content-start mb-2" key={index}>
                                <span className="badge rounded-pill bg-secondary"> 
                                  {item.texto}
                                </span>
                               </div>
                            )
                ))
            }
            
           
            <Agregar/>
        </div>
        
    )
}

export default Chat

import React from 'react'
import Agregar from './Agregar'

const Chat = () => {
    return (
        <div className="mt-3 px-2">
            <div className="d-flex justify-content-end mb-2">
             <span className="badge rounded-pill bg-primary"> 
                 mensaje del usuario activo
             </span>
            </div>
            <div className="d-flex justify-content-start mb-2">
             <span className="badge rounded-pill bg-secondary"> 
                 mensaje del usuario externo
             </span>
            </div>
            <Agregar/>
        </div>
        
    )
}

export default Chat

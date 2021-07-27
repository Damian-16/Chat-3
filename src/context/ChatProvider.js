import React, { useState } from 'react'
import {db,auth,provider} from '../firebase'



export const ChatContext = React.createContext()


export const ChatProvider = (props) => {
    const [usuario, setUsuario] = React.useState({
        uid:null,
        email:null,
        estado:null,
    })
    React.useEffect(()=>{
      detectarUsuario()
    } ,[])
    const detectarUsuario=()=>{
    
        auth.onAuthStateChanged(user=>{
            if(user){
                setUsuario({uid:user.uid,email:user.email,estado:true})
            }
            else{
                setUsuario({uid:null,email:null,estado:false})
            }
        })
    }
    const ingresoUsuario = async ()=>{
        try{
            await auth.signInWithPopup(provider)

        }
        catch(error){
            console.error(error)
        }
    }
    const cerrarSesion =()=>{
        auth.signOut()
    }
    

   const saludo = 'hola desde chat'

    return (
        <ChatContext.Provider value={{usuario,ingresoUsuario,cerrarSesion}}>
            {props.children}
        </ChatContext.Provider>
    )
}
export default ChatProvider;
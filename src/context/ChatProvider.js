import React, { useState } from 'react'
import {db,auth,provider} from '../firebase'



export const ChatContext = React.createContext()


export const ChatProvider = (props) => {
    const [usuario, setUsuario] = React.useState({
        uid:null,
        email:null,
        estado:null,
    })
    const [mensajes, setMensajes] = useState([])
    React.useEffect(()=>{
      detectarUsuario()
    } ,[])
    const detectarUsuario=()=>{
    
        auth.onAuthStateChanged(user=>{
            if(user){
                setUsuario({uid:user.uid,email:user.email,estado:true})
                cargarMensajes()
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
    const cargarMensajes =() =>{
        db.collection('chat')
        .onSnapshot(query =>{ //snapshot actualiza en tiempo real los mensajes
           const arrayMensajes=  query.docs.map(item=>item.data())//nuestro recorrido
           setMensajes(arrayMensajes)//esto empuja los mensajes al estado de mensajes
        })
    }
    const agregarMensajes = async(uidChat,textoInput)=>{
        try {
            await db.collection('chat').add({
                fecha:Date.now(),
                texto:textoInput,
                uid:uidChat  //no hace falta empujar los datos porq el onSnapshot lo actualiza en tiempo real

            })
        } catch (error) {
            
        }
    }

   const saludo = 'hola desde chat'

    return (
        <ChatContext.Provider value={{usuario,ingresoUsuario,cerrarSesion,mensajes,agregarMensajes}}>
            {props.children}
        </ChatContext.Provider>
    )
}
export default ChatProvider;
import React from 'react'


export const ChatContext = React.createContext()



export const ChatProvider = (props) => {

   const saludo = 'hola desde chat'

    return (
        <ChatContext.Provider value={{saludo}}>
            {props.children}
        </ChatContext.Provider>
    )
}
export default ChatProvider;
import {createContext, useState, useEffect} from 'react'
const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [notificationOpen, setNotificationOpen] = useState(false)
    const [message, setMessage] = useState("")
    
    useEffect(()=> {
        const timer = ()=> setTimeout(()=> {
          setNotificationOpen(false)       
        }, 1000 *5)
        if(notificationOpen === true ){
          timer()
        }
    },[notificationOpen])

    return (
        <NotificationContext.Provider 
        value={{
          notificationOpen,
          setNotificationOpen,
          message,
          setMessage
          }}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext
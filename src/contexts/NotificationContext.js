import {createContext, useState} from 'react'
const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [notificationOpen, setNotificationOpen] = useState(false)
    const [message, setMessage] = useState("")

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
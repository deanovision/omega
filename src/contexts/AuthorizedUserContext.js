import {createContext, useState, useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config'
import { getUserById } from '../firebase/userModel'

const AuthorizedUserContext = createContext()

export const AuthorizedUserProvider = ({children}) => {
  const [authUser, setAuthUser] = useState({})
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [colorScheme, setColorScheme] = useState('light');

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUserById(user)
          .then(res => {
            console.log(res)
            setAuthUser(res)
            setIsAuthorized(true)
          })
          .catch(err => console.log(err.message))
      } 
      else {
        console.log("user is signed out")
        setIsAuthorized(false)
      }
    });
  }, [setAuthUser, setIsAuthorized])

    return (
        <AuthorizedUserContext.Provider 
        value={{
          authUser, 
          setAuthUser, 
          isAuthorized, 
          setIsAuthorized, 
          colorScheme, 
          setColorScheme
          }}>
            {children}
        </AuthorizedUserContext.Provider>
    )
}

export default AuthorizedUserContext
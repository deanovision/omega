import React, {useEffect, useContext} from 'react';
import {  Outlet, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/config';
import {Loader} from '@mantine/core'
import AuthorizedUserContext from '../contexts/AuthorizedUserContext';
const ProtectedRoute = () => {
  const {isAuthorized, setIsAuthorized} = useContext(AuthorizedUserContext)
  let navigate = useNavigate()

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthorized(true)
      } 
      else {
        console.log("user is signed out")
        setIsAuthorized(false)
        navigate("../auth/login", {replace: true})
      }
    })
  }, [navigate, setIsAuthorized])
  
  if(isAuthorized === true) {
    return <Outlet />
  }else {
    return <Loader size="xl" />
  }
}
export default ProtectedRoute
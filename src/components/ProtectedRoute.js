import React, {useEffect, useContext} from 'react';
import {  Outlet, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/config';
import ContentSkeleton from './ContentSkeleton';
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
        navigate("../login", {replace: true})
      }
    })
  }, [navigate, setIsAuthorized])
  
  if(isAuthorized === true) {
    return <Outlet />
  }else {
    return <ContentSkeleton />
  }
}
export default ProtectedRoute
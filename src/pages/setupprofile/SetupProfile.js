import React, { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import { onAuthStateChanged} from "firebase/auth";
import { auth } from '../../firebase/config'
import { addUser } from '../../firebase/userModel'
import { AlertCircle } from 'tabler-icons-react';
import {
  TextInput,
  Paper,
  Title,
  Container,
  Button,
  Alert,
} from '@mantine/core';

const SetupProfile = ()=> {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [id, setId] = useState("")
  const [error, setError] = useState("")
  let navigate = useNavigate()

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setName(user.displayName)
          setEmail(user.email)
          setId(user.uid)
        } else {
          console.log("user is signed out")
          navigate("../login", {replace: true})
        }
      });
  }, [navigate])
  const handleChanges = (e, setInput) => {
      setInput(e.target.value)
  }


  const handleSubmit = (e)=> {
    e.preventDefault()
    const userData = {
        uid: id,
        name: name,
        userName: userName,
        email: email
    }
    const checkUser = []

    for(const key in userData){
        if(userData[key] === "") {
            let promise = new Promise ((resolve, reject) => {
            reject(new Error (`${key} is missing`))
            })
            checkUser.push(promise)
        }
        else{
            let promise = new Promise ((resolve, reject) => {
            resolve(userData[key])
            })
            checkUser.push(promise)
        }
    }
    Promise.all(checkUser)
      .then(()=> {
        addUser(userData)
        setError("")
        navigate("../auth/dashboard")
    })
      .catch(err => {
        setError(err.message)
        console.log(err.message)
      })
  }
  return (
    <>
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Setup Your Profile
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {
        error ?
        <Alert icon={<AlertCircle size={16} />} title="Whoops!" color="red">
            {error}
        </Alert>
        :
        null
        }
        <TextInput 
          name="email" 
          value={email} 
          onChange={e=> handleChanges(e, setEmail)}
          label="Email" 
          placeholder="you@email.com" 
          required />
        <TextInput 
          name="name" 
          value={name} 
          onChange={e=> handleChanges(e, setName)}
          label="Name" 
          placeholder="John Smith" 
          required />
        <TextInput 
          name="userName" 
          value={userName} 
          onChange={e=> handleChanges(e, setUserName)}
          label="Username" 
          placeholder="jsmith777" 
          required />
        <Button onClick={e => handleSubmit(e)} fullWidth mt="xl">
          Submit
        </Button>
      </Paper>
    </Container>
    </>
  );
}
export default SetupProfile
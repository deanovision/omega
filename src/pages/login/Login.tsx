import React, { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import { auth, googleProvider } from '../../firebase/config';
import { AlertCircle } from 'tabler-icons-react';
import { GoogleIcon } from '../../components/GoogleIcon.tsx';
import { getUserById, addNewUser } from '../../firebase/userModel';
import { 
  signInWithEmailAndPassword, 
  signInWithRedirect,
  onAuthStateChanged, 
  } from "firebase/auth";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Alert
} from '@mantine/core';

const Login = ()=> {
  let navigate = useNavigate()

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("user ID",uid)
        console.log("Login user by ID", getUserById(user))
        getUserById(user)
          .then(res => {
            if(res === undefined){
              addNewUser(user)
              navigate(`../auth/users/${user.uid}`, {replace: true})
            }
            else {navigate("../auth/dashboard", {replace: true})}
          })
          .catch(err => console.log(err.message))
      } 
      else {
        console.log("user is signed out")
      }
    });
  }, [navigate])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const handleChanges = (e, setInput) => {
      setInput(e.target.value)
  }
  const signInWithGoogle = e=> {
    e.preventDefault()
    signInWithRedirect(auth, googleProvider)
    .then((res)=> {
      console.log('sign in ', res)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
      console.log(errorCode, errorMessage)
      alert(errorMessage)
    });
  }
  const handleSubmit = (e)=> {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setError("")
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
      console.log(errorCode, errorMessage)
    });
  

  }
  return (
    <>
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor<'a'> href="#" size="sm" onClick={(event) => {event.preventDefault(); navigate("../signup", {replace: true})}}>
          Create account
        </Anchor>
      </Text>

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
          placeholder="you@mantine.dev" 
          required />
        <PasswordInput 
          name="password" 
          value={password} 
          onChange={e=> handleChanges(e, setPassword)}
          label="Password" 
          placeholder="Your password" 
          required mt="md" />
        <Group position="apart" mt="md">
          <Checkbox label="Remember me" />
          <Anchor<'a'> onClick={(event) => {event.preventDefault(); navigate("../reset-password", {replace: true})}} href="#" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button onClick={e => handleSubmit(e)} fullWidth mt="xl">
          Log in
        </Button>
        <Button 
          onClick={e => signInWithGoogle(e)} 
          leftIcon={<GoogleIcon />}
          fullWidth mt="xl" 
          color="dark">
          Log in with Google
        </Button>
      </Paper>
    </Container>
    </>
  );
}
export default Login
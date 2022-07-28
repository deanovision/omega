import React, { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import { 
    createUserWithEmailAndPassword, 
    signInWithRedirect, 
    onAuthStateChanged} from "firebase/auth";
import { auth, googleProvider } from '../../firebase/config';
import {addNewUser} from '../../firebase/userModel'
import { AlertCircle } from 'tabler-icons-react';
import {GoogleIcon} from '../../components/GoogleIcon.tsx'
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
  Alert,
} from '@mantine/core';

const SignUp = ()=> {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  let navigate = useNavigate()

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log("user ID",uid)
          navigate("../auth/setup-profile", {replace: true})
        } else {
          console.log("user is signed out")
        }
      });
  }, [navigate])
  const handleChanges = (e, setInput) => {
      setInput(e.target.value)
  }
  const signInWithGoogle = e=> {
    e.preventDefault()
    signInWithRedirect(auth, googleProvider)
    .then((res)=> {
      console.log('sign in ', res)
      addNewUser(res.user)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
      console.log(errorCode, errorMessage)
      alert(errorMessage)
    });
  }

  const handleSubmit = (e)=> {
    console.log(email, password)
    e.preventDefault()
    if(password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setError("")
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage)
          console.log(errorCode, errorMessage)
          // ..
        });
    }
    else{
        setError("Passwords do not match")
    }
  

  }
  return (
    <>
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Welcome!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{' '}
        <Anchor<'a'> href="#" size="sm" onClick={(event) => {event.preventDefault(); navigate("../login", {replace: true})}}>
          Login
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
        <PasswordInput 
          name="confirm-password" 
          value={confirmPassword} 
          onChange={e=> handleChanges(e, setConfirmPassword)}
          label="Confirm Password" 
          placeholder="Your password" 
          required mt="md" />
        <Group position="apart" mt="md">
          <Checkbox label="Remember me" />
          <Anchor<'a'> onClick={(event) => {event.preventDefault(); navigate("../reset-password", {replace: true})}} href="#" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button onClick={e => handleSubmit(e)} fullWidth mt="xl">
          Sign Up
        </Button>
        <Button 
          onClick={e => signInWithGoogle(e)} 
          leftIcon={<GoogleIcon />}
          fullWidth mt="xl" 
          color="dark">
          Sign Up with Google
        </Button>
      </Paper>
    </Container>
    </>
  );
}
export default SignUp
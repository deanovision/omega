import React, { useState} from 'react';
import { resetPassword} from '../../firebase/authorizeUsers';
import {auth} from '../../firebase/config'
import { AlertCircle } from 'tabler-icons-react';
import {useNavigate} from 'react-router-dom'

import {
  TextInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Alert
} from '@mantine/core';

const ResetPassword = ()=> {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  let navigate = useNavigate()
  
  const handleChanges = (e, setInput) => {
      setInput(e.target.value)
  }
  const handleSubmit = (e)=> {
    e.preventDefault()
    resetPassword(auth, email, setError)
  }

  return (
    <>
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Reset Your Password
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Don't need to reset your password?{' '}
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
          placeholder="you@email.com" 
          required />
        <Button 
          onClick={e => handleSubmit(e)} 
          fullWidth mt="xl" 
          color="dark">
          Send Reset Email
        </Button>
      </Paper>
    </Container>
    </>
  );
}
export default ResetPassword
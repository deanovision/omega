import React, { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import { onAuthStateChanged} from "firebase/auth";
import { auth } from '../../firebase/config'
import { addUser } from '../../firebase/userModel'
import { AlertCircle } from 'tabler-icons-react';
import DropzoneButton from '../../components/DropzoneButton.tsx'
import { uploadAvatar } from '../../firebase/storage';
import {
  TextInput,
  Paper,
  Title,
  Container,
  Button,
  Alert,
} from '@mantine/core';

const SetupProfile = ()=> {
  let navigate = useNavigate()
  const [error, setError] = useState("")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [avatarUrl, setAvatarUrl] = useState("")
  const [profile, setProfile] = useState({
    email: "",
    userName: "",
    name: "",
    uid: ""
  })
  const {email, userName, name, uid} = profile

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          let {email, displayName, uid} = user
          setProfile({...profile, email, name: displayName, uid})
        } else {
          console.log("user is signed out")
          navigate("../login", {replace: true})
        }
      });
  }, [navigate])

  const handleChanges = (e) => {
    setProfile({...profile, [e.target.name]: e.target.value})
}

  const handleSubmit = (e)=> {
    e.preventDefault()
    const userData = {
        uid: uid,
        name: name,
        userName: userName,
        email: email,
        avatarUrl: avatarUrl
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
        navigate("../dashboard")
    })
      .catch(err => {
        setError(err.message)
        console.log(err.message)
      })
  }
  // console.log("PROFILE", profile)
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
          value={profile.email} 
          onChange={e=> handleChanges(e)}
          label="Email" 
          placeholder="you@email.com" 
          required />
        <TextInput 
          name="name" 
          value={profile.name} 
          onChange={e=> handleChanges(e)}
          label="Name" 
          placeholder="John Smith" 
          required />
        <TextInput 
          name="userName" 
          value={profile.userName} 
          onChange={e=> handleChanges(e)}
          label="Username" 
          placeholder="jsmith777" 
          required />
        <DropzoneButton progress={uploadProgress} uploadFile={uploadAvatar} setUploadUrl={setAvatarUrl} setProgress={setUploadProgress} />
        <Button onClick={e => handleSubmit(e)} fullWidth mt="xl">
          Submit
        </Button>
      </Paper>
    </Container>
    </>
  );
}
export default SetupProfile
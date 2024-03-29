import React, { useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import { addUser } from '../../firebase/userModel'
import { AlertCircle } from 'tabler-icons-react';
import DropzoneButton from '../../components/DropzoneButton.tsx'
import { uploadAvatar } from '../../firebase/storage';
import AuthorizedUserContext from '../../contexts/AuthorizedUserContext';
import {
  TextInput,
  Paper,
  Title,
  Container,
  Button,
  Alert,
  Textarea
} from '@mantine/core';

const SetupProfile = ()=> {
  let navigate = useNavigate()
  const {authUser, isAuthorized} = useContext(AuthorizedUserContext)
  const [error, setError] = useState("")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [avatarUrl, setAvatarUrl] = useState("")
  const [profile, setProfile] = useState({...authUser})
  const {email, name, uid, bio} = authUser

  useEffect(()=> {
    return isAuthorized === true ? 
    setProfile(profile => ({...profile, email, name, uid, bio})) : 
    navigate("../login", {replace: true})
  }, [navigate, email, name, uid, isAuthorized, bio])

  const handleChanges = (e) => {
    setProfile({...profile, [e.target.name]: e.target.value})
}

  const handleSubmit = (e)=> {
    e.preventDefault()
    const {uid, name, userName, email, bio} = profile
    const userData = {
        uid: uid,
        name: name,
        userName: userName,
        email: email,
        bio: bio, 
        avatarUrl: avatarUrl,
        posts: 0,
        followers: 0
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
        <Textarea
          placeholder="Tell people about yourself"
          onChange={e=> handleChanges(e)}
          value={profile.bio}
          label="Bio" />
        <DropzoneButton 
          progress={uploadProgress} 
          uploadFile={uploadAvatar} 
          setUploadUrl={setAvatarUrl} 
          setProgress={setUploadProgress} />
        <Button onClick={e => handleSubmit(e)} fullWidth mt="xl">
          Submit
        </Button>
      </Paper>
    </Container>
    </>
  );
}
export default SetupProfile
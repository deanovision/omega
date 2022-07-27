import React, { useState, useContext} from 'react';
// import {useNavigate} from 'react-router-dom'
import { updateUser } from '../../firebase/userModel'
import { AlertCircle } from 'tabler-icons-react';
import DropzoneButton from '../../components/DropzoneButton.tsx'
import { uploadAvatar } from '../../firebase/storage';
import NotificationContext from '../../contexts/NotificationContext';
import {
  TextInput,
  Paper,
  Title,
  Container,
  Button,
  Alert,
  Textarea
} from '@mantine/core';

const UpdateProfile = ({user, setOpened})=> {
//   let navigate = useNavigate()
//   const {authUser, isAuthorized} = useContext(AuthorizedUserContext)
  const [error, setError] = useState("")
  const {setMessage, setNotificationOpen} = useContext(NotificationContext)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [avatarUrl, setAvatarUrl] = useState("")
  const [profile, setProfile] = useState({...user})

  const handleChanges = (e) => {
    setProfile({...profile, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e)=> {
    e.preventDefault()
    avatarUrl === "" ? 
    updateUser({...profile}, setError) :
    updateUser({...profile, avatarUrl}, setError)
    setOpened(false)
    setNotificationOpen(true)
    setMessage("Successfully updated your profile")
  }
  return (
    <>
    <Container>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Update Your Profile
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
          name="bio"
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
export default UpdateProfile
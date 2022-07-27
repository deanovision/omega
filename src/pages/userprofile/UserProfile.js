import {useState, useEffect, useContext} from 'react'
import AuthorizedUserContext from '../../contexts/AuthorizedUserContext'
import CommentListSimple from '../../components/CommentListSimple'
import {fetchComments} from '../../utils/dummyData'
import { fetchUser } from '../../firebase/userModel'
import UserProfileTabs from '../../components/UserProfileTabs.tsx'
import { Notebook, Users } from 'tabler-icons-react'
import {Container, Group, createStyles, Avatar, Card, Text, MediaQuery} from '@mantine/core'
import { useParams, useNavigate } from 'react-router-dom'
import EditProfileDrawer from '../../components/EditProfileDrawer'
// import SimpleNotification from '../../components/SimpleNotification'
// import UpdateProfile from '../updateprofile/UpdateProfile'
// import UserProfileMenu from '../../components/UserProfileMenu.tsx'
// import SimpleDrawer from '../../components/SimpleDrawer'

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
  },
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },
  profileHeader: {
    display: "flex",
    alignItems:"center"
  },
  mobile: {
    display: 'none',
  },
  profileHeaderMobile: {
    display: "flex",
    flexDirection: 'column',
    alignItems:"center"
  },
  containerMobile: {
    display: "flex",
    padding: 0,
  },
  desktop: {
    display: 'none',
  }
}));

function UserProfile() {
    const [user, setUser] = useState({})
    const [comments, setComments] = useState([])
    const { classes } = useStyles();
    const {authUser} = useContext(AuthorizedUserContext)
    let {uid} = useParams()
    let navigate = useNavigate

    useEffect(()=>{
      // console.log("UID USE PARAMS", uid)
        fetchUser(uid)
        .then(res => {
          setUser({...res})
        })
        .catch(err => console.log(err))
    },[uid, authUser.uid, navigate])
    useEffect(()=> {
        fetchComments(setComments)
        .catch(err => console.log(err))
    }, [])
    return( 
      <>
      <MediaQuery largerThan="sm" styles={classes.mobile}>
        <Container mt={20} className={classes.containerMobile} size="xl">
          <Container p={0}>
            <Card className={classes.profileHeaderMobile} withBorder p="xl" radius="sm">
            <Avatar radius={100} size={200} src={user?.avatarUrl} alt={user?.name} />
            <Container mr={10} ml={10}>
              <Text align="left" size="lg" weight={500} mt="sm">
                {user?.name}
              </Text>
              <Text  mb={10} size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                {user.userName ? `@${user.userName}` : null}
              </Text>
              <Text align="left" size="sm" color="dimmed">
              {user?.bio}
              </Text>
              <Group mb={10} noWrap spacing={10} mt={10}>
                <Notebook size={20} className={classes.icon} />
                <Text size="sm" color="dimmed">
                  {user?.posts}
                </Text>
                <Users size={20} className={classes.icon} />
                <Text size="sm" color="dimmed">
                  {user?.followers}
                </Text>
              </Group>
              {
                uid === authUser.uid ? 
                <EditProfileDrawer align={"center"} user={user} /> 
                : null
              }
            </Container>
            </Card>
            <UserProfileTabs timeline={<CommentListSimple comments={comments} />} />
          </Container>
          {/* <SimpleDrawer content={<UserProfileMenu mainLinks={userLinks} />} /> */}
        </Container>
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={classes.desktop}>
        <Container mt={20} className={classes.container} size="xl">
          <Container>
            <Card className={classes.profileHeader} withBorder p="xl" radius="sm">
            <Avatar radius={100} size={125} src={user?.avatarUrl} alt={user?.name} />
            <Container mr={10} ml={10}>
              <Text align="left" size="lg" weight={500} mt="sm">
                {user?.name}
              </Text>
              <Text  mb={10} size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
               {user.userName ? `@${user.userName}` : null}
              </Text>
              <Text align="left" size="sm" color="dimmed">
                {user?.bio}
              </Text>
              <Group mb={10} noWrap spacing={10} mt={10}>
                <Notebook size={20} className={classes.icon} />
                <Text size="sm" color="dimmed">
                  {user?.posts}
                </Text>
                <Users size={20} className={classes.icon} />
                <Text size="sm" color="dimmed">
                  {user?.followers}
                </Text>
              </Group>
              {
                uid === authUser.uid ? 
                <EditProfileDrawer align={"left"} user={user} /> 
                : null
              }
            </Container>
            </Card>
            <UserProfileTabs timeline={<CommentListSimple comments={comments} />} />
          </Container>
          {/* <SimpleDrawer content={<UserProfileMenu mainLinks={userLinks} />} /> */}
        </Container>
      </MediaQuery>      
      </>
    )
}
export default UserProfile
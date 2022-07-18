import {useState, useEffect} from 'react'
import CommentListSimple from '../../components/CommentListSimple'
import {fetchUser, fetchComments} from '../dashboard/dummyData'
import NavBarZeroMargin from '../../components/NavBarZeroMargin.tsx'
import UserProfileMenu from '../../components/UserProfileMenu.tsx'
import UserProfileTabs from '../../components/UserProfileTabs.tsx'
import { loremIpsum } from '../dashboard/dummyData'
import {Container, createStyles, Avatar, Card, Text} from '@mantine/core'

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
  },
  profileHeader: {
    display: "flex",
    alignItems:"center"
  },

}));

function UserProfile() {
    const [user, setUser] = useState({})
    const [comments, setComments] = useState([])
    const { classes } = useStyles();
    useEffect(()=>{
        fetchUser(setUser)
        .catch(err => console.log(err))
    },[])
    useEffect(()=> {
        fetchComments(setComments)
        .catch(err => console.log(err))
    }, [])
    
    const tabInfo = [
        {label: 'Home', link: '/auth/dashboard'},
        {label: 'Profile', link: '/auth/user'},
        {label: 'Login', link: '/auth/login'}
      ]
      const userLinks = [
        {label: 'My Posts', link: '/auth/dashboard'},
        {label: 'Highlights', link: '/auth/user'},
        {label: 'Omega', link: '/auth/login'}
      ]      

    return( 
      <>
        <NavBarZeroMargin links={tabInfo} />
        <Container className={classes.container} size="xl">
          <Container>
            <Card className={classes.profileHeader} withBorder p="xl" radius="sm">
            <Avatar radius={100} size={150} src={user?.avatar} alt={user?.name} />
            <Container mr={0} ml={0}>
              <Text align="left" size="lg" weight={500} mt="sm">
                {user?.name}
              </Text>
              <Text align="left" size="sm" color="dimmed">
                {loremIpsum}
              </Text>
            </Container>
            </Card>
            <UserProfileTabs timeline={<CommentListSimple comments={comments} />} />
          </Container>
          <UserProfileMenu mainLinks={userLinks} />
        </Container>
      </>
    )
}
export default UserProfile
import React from 'react'
import NavBarZeroMargin from '../../components/NavBarZeroMargin.tsx';
import {useEffect, useState} from 'react'
import { fetchUsers } from '../dashboard/dummyData'
import UsersList from '../../components/UsersList.tsx';
import { Container, Card } from '@mantine/core';

function FindUsers() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetchUsers(setUsers)
        .catch(err => console.log(err))
    },[])
    const tabInfo = [
        {label: 'Home', link: '/auth/dashboard'},
        {label: 'Profile', link: '/auth/user'},
        {label: 'Find People', link: '/auth/search-users'}
      ]
    return(
        <>
        <NavBarZeroMargin links={tabInfo} />
        <Container mt={20} size="md" px={0}>
        <Card withBorder p="xl" radius="sm">
            {users?
            <UsersList data={users} />
            : null
            }
        </Card>
        </Container>
        </>
    )
}
export default FindUsers




// import React from 'react'
// import NavBar from '../../components/NavBar.tsx';
// import CommentSimple from '../../components/CommentSimple.tsx';
// import {useEffect, useState} from 'react'
// import { fetchUser, fetchComments, relativeTime, loremIpsum } from './dummyData'
// import UserCard from '../../components/UserCard.tsx'
// import PostModal from '../../components/PostModal.tsx';
// import { Grid, Container, Card } from '@mantine/core';
// import UserProfileTabs from '../../components/UserProfileTabs.tsx';
// import CommentListSimple from '../../components/CommentListSimple';
// import UserCardWithButton from '../../components/UserCardWithButton.tsx';

// function Dashboard() {
//     const [user, setUser] = useState({})
//     const [comments, setComments] = useState([])
//     useEffect(()=>{
//         fetchUser(setUser)
//         .catch(err => console.log(err))
//     },[])
//     useEffect(()=> {
//         fetchComments(setComments)
//         .catch(err => console.log(err))
//     }, [])
//     const tabInfo = [
//         {label: 'Home', link: '/auth/dashboard'},
//         {label: 'Profile', link: '/auth/user'},
//         {label: 'Find People', link: '/auth/search-users'}
//       ]
//     return(
//         <>
//         <NavBar links={tabInfo} />
//         <Container size="xl" px={0}>
//             <Grid columns={24}>
//                 <Grid.Col span={6}>
//                     <Card withBorder p="xl" radius="sm">   
//                         {user.name? 
//                         <>
//                             <UserCardWithButton
//                                 avatar={user.avatar}
//                                 name={user.name}
//                                 email={user.job}
//                                 title={user.job}
//                                 stats={user.stats}                         
//                                 />
//                         </>
//                             : null
//                         } 
//                     </Card>
//                 </Grid.Col>
//                 <Grid.Col span={18}>
//                 <UserProfileTabs timeline={<CommentListSimple comments={comments} />} />
//                 </Grid.Col>
//             </Grid>
//         </Container>
//         </>
//     )
// }
// export default Dashboard
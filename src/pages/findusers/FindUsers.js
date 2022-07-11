import React from 'react'
import NavBar from '../../components/NavBar.tsx';
import CommentSimple from '../../components/CommentSimple.tsx';
import {useEffect, useState} from 'react'
import { fetchUser, fetchUsers, relativeTime, loremIpsum } from '../dashboard/dummyData'
import UserCard from '../../components/UserCard.tsx'
import UsersList from '../../components/UsersList.tsx';
import PostModal from '../../components/PostModal.tsx';
import { Grid, Container } from '@mantine/core';

function Dashboard() {
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetchUser(setUser)
        .catch(err => console.log(err))
    },[])
    useEffect(()=>{
        fetchUsers(setUsers)
        .catch(err => console.log(err))
    },[])
    const tabInfo = [
        {label: 'Public', link: '/public'},
        {label: 'Dashboard', link: '/dashboard'},
        {label: 'Login', link: '/auth/login'}
      ]
    return(
        <>
        <NavBar links={tabInfo} />
        <Container size="xl" px={0}>
            <Grid columns={24}>
                <Grid.Col span={6}>
                    {user.name? 
                    <>
                        <UserCard 
                            avatar={user.avatar}
                            image={user.image}
                            name={user.name}
                            job={user.job}
                            stats={user.stats} 
                            />
                        <PostModal />
                    </>
                        : null
                    } 
                </Grid.Col>
                <Grid.Col span={18}>
                    {users?
                        <UsersList data={users} />
                        : null
                    }
                </Grid.Col>
            </Grid>
        </Container>
        </>
    )
}
export default Dashboard
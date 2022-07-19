import React from 'react'
import NavBar from '../../components/NavBar.tsx';
import {useEffect, useState} from 'react'
import { fetchUser, fetchComments } from './dummyData'
import { Grid, Container, Card } from '@mantine/core';
import UserProfileTabs from '../../components/UserProfileTabs.tsx';
import CommentListSimple from '../../components/CommentListSimple';
import UserCardWithButton from '../../components/UserCardWithButton.tsx';

function Dashboard() {
    const [user, setUser] = useState({})
    const [comments, setComments] = useState([])
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
        {label: 'Find People', link: '/auth/search-users'}
      ]
    return(
        <>
        <NavBar links={tabInfo} />
        <Container size="xl" px={0}>
            <Grid columns={24}>
                <Grid.Col span={6}>
                    <Card withBorder p="xl" radius="sm">   
                        {user.name? 
                        <>
                            <UserCardWithButton
                                avatar={user.avatar}
                                name={user.name}
                                email={user.job}
                                title={user.job}
                                stats={user.stats}                         
                                />
                        </>
                            : null
                        } 
                    </Card>
                </Grid.Col>
                <Grid.Col span={18}>
                <UserProfileTabs timeline={<CommentListSimple comments={comments} />} />
                </Grid.Col>
            </Grid>
        </Container>
        </>
    )
}
export default Dashboard
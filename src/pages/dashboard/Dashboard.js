import React from 'react'
import NavBar from '../../components/NavBar.tsx';
import CommentSimple from '../../components/CommentSimple.tsx';
import {useEffect, useState} from 'react'
import { fetchUser, fetchComments, relativeTime, loremIpsum } from './dummyData'
import UserCard from '../../components/UserCard.tsx'
import PostModal from '../../components/PostModal.tsx';
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
        {label: 'Settings', link: '/auth/settings'}
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
                            {/* <UserCard 
                                avatar={user.avatar}
                                image={user.image}
                                name={user.name}
                                job={user.job}
                                stats={user.stats} 
                            /> */}
                            <UserCardWithButton
                                avatar={user.avatar}
                                name={user.name}
                                email={user.job}
                                title={user.job}
                                stats={user.stats}                         
                                />
                            {/* <PostModal /> */}
                        </>
                            : null
                        } 
                    </Card>
                </Grid.Col>
                <Grid.Col span={18}>
                <UserProfileTabs timeline={<CommentListSimple comments={comments} />} />
                    {/* <CommentSimple
                    postedAt={relativeTime(1657307860533)}
                    body={loremIpsum}
                    author={{
                      name: user?.name,
                      image: user?.avatar
                    }
                    }
                    /> */}
                </Grid.Col>
            </Grid>
        </Container>
        </>
    )
}
export default Dashboard
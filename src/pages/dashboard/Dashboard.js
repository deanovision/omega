import React from 'react'
import NavBarZeroMargin from '../../components/NavBarZeroMargin.tsx';
import {useEffect, useState} from 'react'
import { fetchUser, fetchComments } from '../../utils/dummyData'
import { Grid, Container, Card } from '@mantine/core';
import DashboardTabs from '../../components/DashboardTabs.js';
import CommentListSimple from '../../components/CommentListSimple';
import UserCardWithButton from '../../components/UserCardWithButton.tsx';
import TrendingNews from './TrendingNews';

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
        <NavBarZeroMargin links={tabInfo} />
        <Container mt={20} px={0}>
        <DashboardTabs 
                timeline={<CommentListSimple comments={comments} />}
                trendingNewsInfo={<TrendingNews />} />
            {/* <Grid columns={24}>
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
                <DashboardTabs 
                timeline={<CommentListSimple comments={comments} />}
                trendingNewsInfo={<TrendingNews />} />
                </Grid.Col>
            </Grid> */}
        </Container>
        </>
    )
}
export default Dashboard
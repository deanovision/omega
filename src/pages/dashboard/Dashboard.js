import React from 'react'
import {useEffect, useState} from 'react'
import {  fetchPosts } from '../../utils/dummyData'
import {Container} from '@mantine/core';
import DashboardTabs from '../../components/DashboardTabs.js';
import TrendingNews from './TrendingNews';
import PostListSimple from '../../components/PostListSimple';

function Dashboard() {
    // const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    // useEffect(()=>{
    //     fetchUser(setUser)
    //     .catch(err => console.log(err))
    // },[])
    useEffect(()=> {
        fetchPosts(setPosts)
        .catch(err => console.log(err))
    }, [])

    return(
        <>
        <Container mt={20} px={0}>
        <DashboardTabs 
                timeline={<PostListSimple postComments={[]} posts={posts} />}
                trendingNewsInfo={<TrendingNews />} />
        </Container>
        </>
    )
}
export default Dashboard
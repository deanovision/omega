import React from 'react'
import {useEffect, useState} from 'react'
import {  fetchPosts } from '../../utils/dummyData'
import {Container} from '@mantine/core';
import DashboardTabs from '../../components/DashboardTabs.js';
import TrendingNews from './TrendingNews';
import CommentListSimple from '../../components/CommentListSimple';
// import PostListSimple from '../../components/PostListSimple';

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
                timeline={<CommentListSimple postComments={[]} comments={posts} />}
                trendingNewsInfo={<TrendingNews />} />
        </Container>
        </>
    )
}
export default Dashboard
import React from 'react'
import {useEffect, useState, useContext} from 'react'
import {  fetchPosts } from '../../utils/dummyData'
import {Container} from '@mantine/core';
import DashboardTabs from '../../components/DashboardTabs.js';
import TrendingNews from './TrendingNews';
import CommentListSimple from '../../components/CommentListSimple';
import {fetchRecentPosts} from '../../firebase/postModel'
import AuthorizedUserContext from '../../contexts/AuthorizedUserContext';
// import PostListSimple from '../../components/PostListSimple';

function Dashboard() {
    const {authUser} = useContext(AuthorizedUserContext)
    const [posts, setPosts] = useState([])
    // const [user, setUser] = useState({})
    // useEffect(()=>{
    //     fetchUser(setUser)
    //     .catch(err => console.log(err))
    // },[])
    useEffect(()=> {
        fetchPosts(setPosts)
        .catch(err => console.log(err))
    }, [])
    useEffect(()=> {
        fetchRecentPosts(authUser.uid)
        .catch(err => console.log(err))
    }, [authUser])

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
import React from 'react'
import {useEffect, useState, useContext} from 'react'
import {Container} from '@mantine/core';
import DashboardTabs from '../../components/DashboardTabs.js';
import TrendingNews from './TrendingNews';
import {fetchRecentPosts} from '../../firebase/postModel'
import AuthorizedUserContext from '../../contexts/AuthorizedUserContext';
// import PostListSimple from '../../components/PostListSimple';
import RecentPostList from '../../components/RecentPostsList';

function Dashboard() {
    const {authUser} = useContext(AuthorizedUserContext)
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetchRecentPosts(authUser.uid, setPosts)
        .catch(err => console.log(err))
    }, [authUser])

    return(
        <>
        <Container mt={20} px={0}>
        <DashboardTabs 
                timeline={<RecentPostList postComments={[]} posts={posts} />}
                trendingNewsInfo={<TrendingNews />} />
        </Container>
        </>
    )
}
export default Dashboard
import React from 'react'
import {useEffect, useState} from 'react'
import {  fetchComments } from '../../utils/dummyData'
import {Container} from '@mantine/core';
import DashboardTabs from '../../components/DashboardTabs.js';
import CommentListSimple from '../../components/CommentListSimple';
import TrendingNews from './TrendingNews';

function Dashboard() {
    // const [user, setUser] = useState({})
    const [comments, setComments] = useState([])
    // useEffect(()=>{
    //     fetchUser(setUser)
    //     .catch(err => console.log(err))
    // },[])
    useEffect(()=> {
        fetchComments(setComments)
        .catch(err => console.log(err))
    }, [])

    return(
        <>
        <Container mt={20} px={0}>
        <DashboardTabs 
                timeline={<CommentListSimple comments={comments} />}
                trendingNewsInfo={<TrendingNews />} />
        </Container>
        </>
    )
}
export default Dashboard
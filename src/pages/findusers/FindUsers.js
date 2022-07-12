import React from 'react'
import NavBar from '../../components/NavBar.tsx';
import {useEffect, useState} from 'react'
import { fetchUsers } from '../dashboard/dummyData'
import UsersList from '../../components/UsersList.tsx';
import { Container } from '@mantine/core';

function Dashboard() {
    const [users, setUsers] = useState([])
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
        <Container size="md" px={0}>
            {users?
            <UsersList data={users} />
            : null
            }
        </Container>
        </>
    )
}
export default Dashboard
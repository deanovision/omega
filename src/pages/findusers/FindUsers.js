import React from 'react'
import NavBarZeroMargin from '../../components/NavBarZeroMargin.tsx';
import {useEffect, useState} from 'react'
import { fetchUsers } from '../../utils/dummyData'
import UsersList from '../../components/UsersList.tsx';
import { Container, Card } from '@mantine/core';

function FindUsers() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetchUsers(setUsers)
        .catch(err => console.log(err))
    },[])
    const tabInfo = [
        {label: 'Home', link: '/auth/dashboard'},
        {label: 'Profile', link: '/auth/user'},
        {label: 'Find People', link: '/auth/search-users'}
      ]
    return(
        <>
        <NavBarZeroMargin links={tabInfo} />
        <Container mt={20} size="md" px={0}>
        <Card withBorder p="xl" radius="sm">
            {users?
            <UsersList data={users} />
            : null
            }
        </Card>
        </Container>
        </>
    )
}
export default FindUsers
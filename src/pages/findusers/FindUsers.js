import React from 'react'
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

    return(
        <>
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
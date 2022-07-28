import React from 'react'
import {useEffect, useState} from 'react'
import UsersList from '../../components/UsersList.tsx';
import { Container, Card } from '@mantine/core';
import {fetchUsers} from '../../firebase/userModel'

function FindUsers() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetchUsers(setUsers)
    },[setUsers])

    return(
        <>
        <Container mt={20} size="md" px={0}>
        <Card withBorder p="xl" radius="sm">
            {users.length > 0 ?
            <UsersList data={users} />
            : null
            }
        </Card>
        </Container>
        </>
    )
}
export default FindUsers
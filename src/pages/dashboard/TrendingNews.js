import React from 'react'
// import {useEffect, useState} from 'react'
import { Container, Card } from '@mantine/core';
import NewsList from '../../components/NewsList';

function TrendingNews() {
    return(
        <>
        <Container mt={20} size="md" px={0}>
            <Card withBorder p="xl" radius="sm">
                <NewsList />
            </Card>
        </Container>
        </>
    )
}
export default TrendingNews
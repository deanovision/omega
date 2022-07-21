import React from 'react'
import { Container} from '@mantine/core';
import NewsList from '../../components/NewsList';

function TrendingNews() {
    return(
        <>
        <Container mt={20} size="md" px={0}>
            <NewsList />
        </Container>
        </>
    )
}
export default TrendingNews
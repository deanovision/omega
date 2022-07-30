import React from 'react'
import { Container, Card, Skeleton, MediaQuery } from '@mantine/core';

function ContentSkeleton() {
  return (
    <>
    <MediaQuery largerThan="sm" styles={{display: 'none'}}>
        <Container mt={20} size="md" px={0}>
            <Card withBorder p="xl" radius="sm">
                <Skeleton height={50} circle mb="xl" />
                <Skeleton height={8} radius="xl" />
                <Skeleton height={8} mt={6} radius="xl" />
                <Skeleton height={8} mt={6} width="70%" radius="xl" />
            </Card>
        </Container>
    </MediaQuery>
    <MediaQuery smallerThan="sm" styles={{display: 'none'}}>
        <Container style={{width: '768px'}} mt={20} size="md" px={0}>
            <Card withBorder p="xl" radius="sm">
                <Skeleton height={50} circle mb="xl" />
                <Skeleton height={8} radius="xl" />
                <Skeleton height={8} mt={6} radius="xl" />
                <Skeleton height={8} mt={6} width="70%" radius="xl" />
            </Card>
        </Container>
    </MediaQuery>
    </>
  );
}
export default ContentSkeleton
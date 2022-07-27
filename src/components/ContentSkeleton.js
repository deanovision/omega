import React from 'react'
import { Container, Card } from '@mantine/core';
import { Skeleton } from '@mantine/core';

function ContentSkeleton() {
  return (
    <>
    <Container mt={20} size="md" px={0}>
        <Card withBorder p="xl" radius="sm">
            <Skeleton height={50} circle mb="xl" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </Card>
    </Container>
    <Container mt={20} size="md" px={0}>
        <Card withBorder p="xl" radius="sm">
            <Skeleton height={50} circle mb="xl" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </Card>
    </Container>
    <Container mt={20} size="md" px={0}>
        <Card withBorder p="xl" radius="sm">
            <Skeleton height={50} circle mb="xl" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </Card>
    </Container>
    <Container mt={20} size="md" px={0}>
        <Card withBorder p="xl" radius="sm">
            <Skeleton height={50} circle mb="xl" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </Card>
    </Container>
    <Container mt={20} size="md" px={0}>
        <Card withBorder p="xl" radius="sm">
            <Skeleton height={50} circle mb="xl" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </Card>
    </Container>
    </>
  );
}
export default ContentSkeleton
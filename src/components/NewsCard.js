import React from 'react';
import { createStyles, Avatar, Text, Group, Anchor } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

function NewsCard({ imgUrl, content, title, url }) {
  const { classes } = useStyles();
  return (
    <div>
      <Group noWrap>
        <Avatar src={imgUrl} size={200} />
        <div>

          <Text size="lg" weight={400} className={classes.name}>
            {title}
          </Text>
          <Text mt={10} size="sm" weight={200} color="dimmed">
            {content?.slice(0, 200)}
          </Text>
          <Anchor href={url} target="_blank">
          <Text mt={10} size="xs" sx={{ textTransform: 'uppercase' }} weight={200}>
            Read More...
          </Text>
          </Anchor>

          {/* <Group noWrap spacing={10} mt={3}>
            <At size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              {email}
            </Text>
          </Group> */}

          {/* <Group noWrap spacing={10} mt={5}>
            <PhoneCall size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              {phone}
            </Text>
          </Group> */}
        </div>
      </Group>
    </div>
  );
}
export default NewsCard
import React from 'react';
import { createStyles, Avatar, Image, Text, Group, Anchor, MediaQuery } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
  mobile: {
    display: 'none',
  },
  desktop :{
    display: 'none',
  },
}));

function NewsCard({ imgUrl, content, title, url }) {
  const { classes } = useStyles();
  return (
    <div>
      <MediaQuery largerThan="md" styles={classes.desktop}>
      <Group noWrap>
        <div>
        <Image src={imgUrl} />
          <Text mt={10} size="lg" weight={400} className={classes.name}>
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
        </div>
      </Group>
      </MediaQuery>
      <MediaQuery smallerThan="md" styles={classes.mobile}>
      <Group noWrap>
        <Avatar src={imgUrl} size={250} />
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
        </div>
      </Group>
      </MediaQuery>      
    </div>
  );
}
export default NewsCard
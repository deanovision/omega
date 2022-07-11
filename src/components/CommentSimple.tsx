import React from 'react';
import { createStyles, Text, Avatar, Group, Grid } from '@mantine/core';
import { ThumbUp, ThumbDown, RotateClockwise2, KeyboardShow, LetterF } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
    textAlign: "left"
  },
  postedAt: {
    textAlign: "left"
  },
  engagement :{
    paddingTop: 10
  }
}));

interface CommentSimpleProps {
  postedAt: string;
  body: string;
  author: {
    name: string;
    image: string;
  };
}

function CommentSimple({ postedAt, body, author }: CommentSimpleProps) {
  const { classes } = useStyles();
  return (
    <div>
      <Group>
        <Avatar src={author.image} alt={author.name} radius="xl" />
        <div>
          <Text size="sm">{author.name}</Text>
          <Text className={classes.postedAt} size="xs" color="dimmed">
            {postedAt}
          </Text>
        </div>
      </Group>
      <Text className={classes.body} size="sm">
        {body}
      </Text>
      <Grid className={classes.engagement}>
        <Grid.Col md={6} lg={3}>
          <KeyboardShow />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <ThumbUp />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <ThumbDown />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <RotateClockwise2 />
        </Grid.Col>
      </Grid>
      
      
      
      
    </div>
  );
}
export default CommentSimple
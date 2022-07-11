import React, {useState} from 'react';
import { createStyles, Text, Avatar, Group, Grid, ActionIcon } from '@mantine/core';
import { ThumbUp, RotateClockwise2, Keyboard } from 'tabler-icons-react';

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
    paddingLeft: 54,
    paddingTop: 10
  },
  liked: {
    color: "green"
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
  const [thumbsUp, setThumbsUp] = useState(false)
  function handleEngagement() {
   return thumbsUp ? classes.liked : ""
  }
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
        <Grid.Col md={8} lg={1}>
          <ActionIcon radius="lg">
            <Keyboard />
          </ActionIcon>
        </Grid.Col>
        <Grid.Col md={8} lg={1}>
          <ActionIcon radius="lg">
            <ThumbUp className={handleEngagement()} onClick={()=> setThumbsUp(!thumbsUp) } />
          </ActionIcon>
        </Grid.Col>
        <Grid.Col md={8} lg={1}>
          <ActionIcon radius="lg">
            <RotateClockwise2 />
          </ActionIcon>
        </Grid.Col>
      </Grid>
      
      
      
      
    </div>
  );
}
export default CommentSimple
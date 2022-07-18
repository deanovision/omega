import React, {useState} from 'react';
import { createStyles, Text, Avatar, Group, Card, ActionIcon } from '@mantine/core';
import { ThumbUp, RotateClockwise2, Message2 } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  body: {
    paddingTop: theme.spacing.sm,
    textAlign: "left"
  },
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    maxWidth: "820px",
    margin: "auto",

  },
  postedAt: {
    textAlign: "left"
  },
  engagement :{
    paddingTop: 10
  },
  icons: {
    color: theme.colorScheme === 'dark' ? "#FFF" : theme.colors.gray[7]    
  },
  liked: {
    color: theme.colors.blue[5]
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
   return thumbsUp ? classes.liked : "icons"
  }
  const { classes } = useStyles();
  return (
    <Card withBorder p="xl" radius="sm" className={classes.card}>
      <Group>
        <Avatar size="lg" src={author.image} alt={author.name} radius="xl" />
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
      <Group className={classes.engagement} spacing="xl">
        <ActionIcon size="xl" radius="lg">
          <Message2 strokeWidth={1} size={36} className={classes.icons} />
        </ActionIcon>
        <ActionIcon size="xl" radius="lg">
          <ThumbUp strokeWidth={1} size={36} className={handleEngagement()} onClick={()=> setThumbsUp(!thumbsUp) } />
        </ActionIcon>
        <ActionIcon size="xl" radius="lg">
          <RotateClockwise2 strokeWidth={1} size={36} className={classes.icons} />
        </ActionIcon>        
      </Group>
      </Card>
  );
}
export default CommentSimple
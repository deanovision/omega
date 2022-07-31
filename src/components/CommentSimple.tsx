import React from "react";
import { createStyles, Text, Avatar, Group, Card } from "@mantine/core";
// import { ThumbUp, RotateClockwise2, Message2 } from 'tabler-icons-react';
// // import { useClickOutside } from '@mantine/hooks';
// import AddComment from './AddComment.tsx';

const useStyles = createStyles((theme) => ({
  body: {
    // paddingTop: theme.spacing.sm,
    textAlign: "left",
    paddingLeft: "0px",
    wordBreak: "break-all",
  },
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    maxWidth: "820px",
    margin: "auto",
    // padding: "0px"
    // borderBottom: "1px solid black",
    // borderRadius: "0px"
    // marginTop: "5px"
  },
  postedAt: {
    textAlign: "left",
  },
  engagement: {
    paddingTop: 10,
    marginLeft: -10,
  },
  icons: {
    color: theme.colorScheme === "dark" ? "#FFF" : theme.colors.gray[7],
  },
  liked: {
    color: theme.colors.blue[5],
  },
  visible: {
    display: "block",
  },
  hidden: {
    display: "none",
  },
  userHeader: {
    marginLeft: "50px",
  },
}));

interface CommentSimpleProps {
  postedAt: string;
  body: string;
  author: {
    name: string;
    image: string;
  };
  postComments: {
    postedAt: string;
    body: string;
    author: {
      name: string;
      image: string;
    };
  }[];
  post: {
    comments: {}[];
  };
}

function CommentSimple({ postedAt, body, author }: CommentSimpleProps) {
  // const [visible, setVisible] = useState(false)
  // const clickOutsideRef = useClickOutside(() => setVisible(false));

  const { classes } = useStyles();
  return (
    <Card shadow="xl" className={classes.card}>
      <Group noWrap align="initial" className={classes.userHeader}>
        <Avatar size={30} src={author.image} alt={author.name} radius="xl" />
        <div>
          <Group spacing={5}>
            <Text size="sm" weight={500}>
              {author.name}
            </Text>
            <Text className={classes.body} size="sm">
              {body}
            </Text>
          </Group>
          <Text className={classes.postedAt} size="xs" color="dimmed">
            {postedAt}
          </Text>
        </div>
      </Group>
    </Card>
  );
}
export default CommentSimple;

import React from "react";
import { createStyles, Text, Group, Card } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  body: {
    textAlign: "left",
    paddingLeft: "0px",
    wordBreak: "break-all",
  },
  card: {
    backgroundColor: theme.colors.blue[0],
    margin: "auto",
    marginBottom: "25px",
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
    // marginLeft: "50px",
  },
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
    <Card className={classes.card}>
      <Group noWrap align="initial" className={classes.userHeader}>
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

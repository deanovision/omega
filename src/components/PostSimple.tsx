import React, { useState } from "react";
import {
  createStyles,
  Text,
  Avatar,
  Group,
  Card,
  ActionIcon,
  Stack,
  Container,
} from "@mantine/core";
import { ThumbUp, RotateClockwise2, Message2 } from "tabler-icons-react";
import CommentListSimple from "./CommentListSimple";
import CommentsModal from "./CommentsModal";
import { formatTimestamp } from "../utils/helperFunctions";
// import { relativeTime, loremIpsum } from '../utils/dummyData';
// import PostListSimple from './PostListSimple';
import AddComment from "./AddComment.js";
// import { useClickOutside } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  body: {
    paddingTop: theme.spacing.sm,
    textAlign: "left",
    marginBottom: "20px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    // flexGrow: 1,
  },
  card: {
    // backgroundColor:
    //   theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    background: "inherit",
    maxWidth: "820px",
    margin: "auto",
    border: "none",
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
    // display: "flex",
    // alignContent: "top"
  },
}));

interface PostSimpleProps {
  postedAt: string;
  body: string;
  author: {
    name: string;
    image: string;
  };
  avatarUrl: string;
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
    createdAt: {
      seconds: Number;
      nanoseconds: Number;
    };
    body: string;
    postedBy: string;
    postedByAvatarUrl: string;
  };
  posts: {}[];
  setPosts: Function;
}

function PostSimple({ post, avatarUrl }: PostSimpleProps) {
  const samplePost = {
    createdAt: "",
    body: "",
    postedBy: "",
    postedByAvatarUrl: "",
  };
  const [commentsList, setCommentsList] = useState(post.comments);
  const [thumbsUp, setThumbsUp] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { createdAt, body, postedBy, postedByAvatarUrl } = post || samplePost;
  // const clickOutsideRef = useClickOutside(() => setVisible(false));

  function handleEngagement() {
    return thumbsUp ? classes.liked : "icons";
  }
  const { classes } = useStyles();
  return (
    <Card shadow="xs" p="xl" radius="sm" className={classes.card}>
      <Container className={classes.container}>
        <Group align="initial" className={classes.userHeader}>
          <Avatar
            size="lg"
            src={avatarUrl || postedByAvatarUrl}
            alt={postedBy}
            radius="xl"
          />
          <div>
            <Text weight={700} size="sm">
              {postedBy && postedBy}
            </Text>
            <Text className={classes.postedAt} size="xs" color="dimmed">
              {createdAt &&
                formatTimestamp(createdAt.seconds, createdAt.nanoseconds)}
            </Text>
            <Text className={classes.body} size="sm">
              {body && body}
            </Text>
          </div>
        </Group>
        <Stack className={classes.engagement} spacing={0}>
          <ActionIcon size="xl" radius="lg">
            <div>
              <Message2
                strokeWidth={1}
                size={36}
                className={classes.icons}
                onClick={() => setModalOpen(true)}
              />
            </div>
          </ActionIcon>
          <ActionIcon size="xl" radius="lg">
            <div>
              <ThumbUp
                strokeWidth={1}
                size={36}
                className={handleEngagement()}
                onClick={() => setThumbsUp(!thumbsUp)}
              />
            </div>
          </ActionIcon>
          <ActionIcon size="xl" radius="lg">
            <div>
              <RotateClockwise2
                strokeWidth={1}
                size={36}
                className={classes.icons}
              />
            </div>
          </ActionIcon>
        </Stack>
        {/* </div>
      </Group> */}
      </Container>
      <CommentsModal
        {...{ modalOpen, setModalOpen, post, samplePost, avatarUrl }}
        content={
          <>
            <AddComment
              {...{
                post,
                commentsList,
                setCommentsList,
                visible: modalOpen,
                setVisible: setModalOpen,
              }}
            />
            <CommentListSimple comments={commentsList} />
          </>
        }
      />
    </Card>
  );
}
export default PostSimple;

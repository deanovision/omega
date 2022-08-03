import React, { useState, useContext } from "react";
import {
  createStyles,
  Text,
  Avatar,
  Group,
  Card,
  ActionIcon,
  Container,
} from "@mantine/core";
import { ThumbUp, Message2, Trash } from "tabler-icons-react";
import { Link } from "react-router-dom";
import CommentListSimple from "./CommentListSimple";
import CommentsModal from "./CommentsModal";
import { formatTimestamp } from "../utils/helperFunctions";
import { deletePost } from "../firebase/postModel";
import AddComment from "./AddComment.js";
import AuthorizedUserContext from "../contexts/AuthorizedUserContext";
// import { relativeTime, loremIpsum } from '../utils/dummyData';
// import PostListSimple from './PostListSimple';
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
    flexDirection: "column",
    // flexGrow: 1,
  },
  links: {
    textDecoration: "none",
    color: "inherit",
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
    display: "flex",
    // justifyContent: "space-around",
    marginLeft: "auto",
    // marginLeft: -10,
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
    uid: string;
    postId: string;
    createdAt: {
      seconds: Number;
      nanoseconds: Number;
    };
    body: string;
    postedBy: string;
    postedByAvatarUrl: string;
  };
  posts: {
    comments: {}[];
    postId: string;
    createdAt: {
      seconds: Number;
      nanoseconds: Number;
    };
    body: string;
    postedBy: string;
    postedByAvatarUrl: string;
  }[];
  setPosts: Function;
}

function PostSimple({ post, posts, setPosts, avatarUrl }: PostSimpleProps) {
  const samplePost = {
    createdAt: "",
    body: "",
    postedBy: "",
    postedByAvatarUrl: "",
  };
  const [commentsList, setCommentsList] = useState(post.comments);
  const [thumbsUp, setThumbsUp] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { authUser } = useContext(AuthorizedUserContext);
  const { createdAt, body, postedBy, postedByAvatarUrl } = post || samplePost;
  // const clickOutsideRef = useClickOutside(() => setVisible(false));

  function handleEngagement() {
    return thumbsUp ? classes.liked : "icons";
  }
  const updatePosts = () => {
    let updatedList = posts.filter((currentPost, i) => {
      return currentPost.postId !== post.postId;
    });
    setPosts(updatedList);
  };
  const { classes } = useStyles();
  return (
    <Card p="sm" radius="sm" className={classes.card}>
      <Container className={classes.container}>
        <Group align="initial" className={classes.userHeader}>
          <Link className={classes.links} to={`/auth/users/${post.uid}`}>
            <Avatar
              size="lg"
              src={avatarUrl || postedByAvatarUrl}
              alt={postedBy}
              radius="xl"
            />
          </Link>
          <div>
            <Link className={classes.links} to={`/auth/users/${post.uid}`}>
              <Text weight={700} size="sm">
                {postedBy && postedBy}
              </Text>
            </Link>
            <Text className={classes.postedAt} size="xs" color="dimmed">
              {createdAt &&
                formatTimestamp(createdAt.seconds, createdAt.nanoseconds)}
            </Text>
            <Text className={classes.body} size="sm">
              {body && body}
            </Text>
          </div>
        </Group>
        <Group className={classes.engagement} spacing={0}>
          <ActionIcon size="md" radius="lg">
            {/* <Group noWrap> */}
            <Message2
              strokeWidth={1}
              size={25}
              className={classes.icons}
              onClick={() => setModalOpen(true)}
            />
            {/* <Text>{commentsList.length > 0 && commentsList.length}</Text> */}
            {/* </Group> */}
          </ActionIcon>
          <ActionIcon size="md" radius="lg">
            <div>
              <ThumbUp
                strokeWidth={1}
                size={25}
                className={handleEngagement()}
                onClick={() => setThumbsUp(!thumbsUp)}
              />
            </div>
          </ActionIcon>
          {authUser.uid === post.uid && (
            <ActionIcon size="md" radius="lg">
              <div>
                <Trash
                  strokeWidth={1}
                  size={25}
                  className={classes.icons}
                  onClick={() => deletePost(post, updatePosts)}
                />
              </div>
            </ActionIcon>
          )}
        </Group>
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

// import CommentSimple from './CommentSimple.tsx'
import PostSimple from "./PostSimple.tsx";
// import { relativeTime } from "../utils/dummyData";
import { createStyles, Card, Divider, MediaQuery } from "@mantine/core";
// import { Timestamp } from "firebase/firestore";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "white",
    maxWidth: "820px",
    margin: "auto",
  },
  mobile: {
    display: "none",
  },
  desktop: {
    display: "none",
  },
  cardMobile: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "white",
    maxWidth: "820px",
    margin: "auto",
  },
  comment: {
    marginTop: "15px",
    marginBottom: "15px",
  },
}));

function PostListSimple({ posts, setPosts, avatarUrl }) {
  const { classes } = useStyles();
  const postList = posts.map((post, index) => {
    return (
      <div key={index} className={classes.comment}>
        <PostSimple {...{ post, posts, setPosts, avatarUrl: avatarUrl }} />
        <Divider my="lg" />
      </div>
    );
  });
  return (
    <>
      <MediaQuery largerThan="sm" styles={classes.mobile}>
        <Card className={classes.cardMobile}>{postList}</Card>
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={classes.desktop}>
        <div className={classes.card}>{postList}</div>
      </MediaQuery>
    </>
  );
}
export default PostListSimple;

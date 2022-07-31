// import CommentSimple from './CommentSimple.tsx'
import PostSimple from "./PostSimple.tsx";
import { createStyles, Card, Divider, MediaQuery } from "@mantine/core";
// import { Timestamp } from "firebase/firestore";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "#f2f2f4",
    minWidth: "820px",
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
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "#f2f2f4",
    maxWidth: "820px",
    margin: "auto",
  },
  comment: {
    marginTop: "15px",
    marginBottom: "15px",
  },
}));

function RecentPostList({ posts, postComments }) {
  const { classes } = useStyles();
  const recentPosts = [];
  posts.forEach((post) => {
    post.recentPosts.forEach((post) => {
      recentPosts.push(post);
    });
  });
  const sortedPosts = recentPosts.sort(
    (post1, post2) => Number(post2.createdAt) - Number(post1.createdAt)
  );
  // console.log("SORTED POSTS ========>", sortedPosts)
  const postList = sortedPosts.map((post, index) => {
    // const postCreatedAt = new Timestamp(
    //   post.createdAt.seconds,
    //   post.createdAt.nanoseconds
    // ).toDate();
    // console.log("CREATED AT ======>",Number(postCreatedAt))
    return (
      <div key={index} className={classes.comment}>
        <PostSimple {...{ post }} />
        <Divider my="sm" />
      </div>
    );
  });
  return (
    <>
      <MediaQuery largerThan="sm" styles={classes.mobile}>
        <Card
          shadow="xl"
          withBorder
          radius="sm"
          pl={0}
          pr={0}
          className={classes.cardMobile}
        >
          {postList}
        </Card>
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={classes.desktop}>
        <Card shadow="xl" withBorder radius="sm" className={classes.card}>
          {postList}
        </Card>
      </MediaQuery>
    </>
  );
}
export default RecentPostList;

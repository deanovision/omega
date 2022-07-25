// import CommentSimple from './CommentSimple.tsx'
import PostSimple from './PostSimple.tsx';
import { loremIpsum, relativeTime } from '../utils/dummyData'
import { createStyles, Card, Divider, MediaQuery } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : "#f2f2f4",
      maxWidth: "820px",
      margin: "auto",

    },
    mobile: {
      display: 'none'
    },
    desktop: {
      display: 'none'
    },
    cardMobile: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : "#f2f2f4",
      maxWidth: "820px",
      margin: "auto",
    },
    comment: {
      marginTop: "30px"
    }
  }));

function PostListSimple({posts, postComments}) {
    const { classes} = useStyles();
    const postList = posts.map((post, index) => {
      return (
        <div key={index} className={classes.comment}>
          <PostSimple
            postedAt={relativeTime(1658553610894)}
            body={loremIpsum}
            author={{
              name: `${post?.name.first} ${post?.name.last}`,
              image: post?.picture.medium
              }
            }
            // postComments={postComments}
            />
            <Divider my="sm" />
        </div>
      )
    })
    return(
      <>
      <MediaQuery largerThan="sm" styles={classes.mobile}>
        <Card shadow="xl" withBorder radius="sm" pl={0} pr={0} className={classes.cardMobile}>
          {postList}
        </Card>
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={classes.desktop}>
        <Card shadow="xl" withBorder radius="sm" className={classes.card}>
          {postList}
        </Card>
      </MediaQuery>      
      </>
    )
}
export default PostListSimple
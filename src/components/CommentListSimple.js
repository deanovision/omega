import CommentSimple from './CommentSimple.tsx'
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

function CommentListSimple({comments}) {
    const { classes} = useStyles();
    const commentList = comments.map((comment, index) => {
      return (
        <div key={index} className={classes.comment}>
          <CommentSimple
            postedAt={relativeTime(1658526793738)}
            body={loremIpsum}
            author={{
              name: `${comment?.name.first} ${comment?.name.last}`,
              image: comment?.picture.medium
              }
            }
            />
            <Divider my="sm" />
        </div>
      )
    })
    return(
      <>
      <MediaQuery largerThan="sm" styles={classes.mobile}>
        <Card shadow="xl" withBorder radius="sm" pl={0} pr={0} className={classes.cardMobile}>
          {commentList}
        </Card>
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={classes.desktop}>
        <Card shadow="xl" withBorder radius="sm" className={classes.card}>
          {commentList}
        </Card>
      </MediaQuery>      
      </>
    )
}
export default CommentListSimple
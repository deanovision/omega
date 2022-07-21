import CommentSimple from './CommentSimple.tsx'
import { loremIpsum, relativeTime } from '../utils/dummyData'
import { createStyles, Card, Divider } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
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
                 postedAt={relativeTime(1657307860533)}
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
        <Card shadow="xl" withBorder p="xl" radius="sm" className={classes.card}>
          {commentList}
        </Card>
    )
}
export default CommentListSimple
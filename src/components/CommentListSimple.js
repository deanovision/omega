import CommentSimple from './CommentSimple.tsx'
import { loremIpsum, relativeTime } from '../pages/dashboard/dummyData'
import { createStyles, Card } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
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
           </div>
      )
    })
    return(
        <Card p="xl" radius="sm" className={classes.card}>
          {commentList}
        </Card>
    )
}
export default CommentListSimple
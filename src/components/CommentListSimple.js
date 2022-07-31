import { useState } from "react";
import CommentSimple from "./CommentSimple.tsx";
import { formatTimestamp } from "../utils/helperFunctions";
import { createStyles, MediaQuery } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "#f2f2f4",
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
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "#f2f2f4",
    maxWidth: "820px",
    margin: "auto",
  },
  comment: {
    marginTop: "0px",
    // padding: "0px"
  },
}));

function CommentListSimple({ comments }) {
  const { classes } = useStyles();
  const commentListContent = comments.map((comment, index) => {
    return (
      <div key={index} className={classes.comment}>
        <CommentSimple
          postedAt={formatTimestamp(
            comment?.createdAt.seconds,
            comment?.createdAt.nanoseconds
          )}
          body={comment?.body}
          author={{
            name: comment?.createdBy,
            image: comment?.postedByAvatarUrl,
          }}
        />
      </div>
    );
  });
  return (
    <>
      <MediaQuery largerThan="sm" styles={classes.mobile}>
        <div>{commentListContent}</div>
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={classes.desktop}>
        <div>{commentListContent}</div>
      </MediaQuery>
    </>
  );
}
export default CommentListSimple;

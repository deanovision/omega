import { Textarea, Button, Transition, createStyles } from "@mantine/core";
import React, { useContext } from "react";
import { useInput } from "../hooks/useInput";
import { Timestamp } from "firebase/firestore";
import AuthorizedUserContext from "../contexts/AuthorizedUserContext";
import { addComment } from "../firebase/postModel";

const useStyles = createStyles((theme) => ({
  button: {
    maxWidth: "100px",
    marginLeft: "auto",
    borderRadius: "100px",
  },
  container: {
    marginTop: 15,
  },
}));

function AddComment({ visible, post, posts, setPosts }) {
  const { authUser } = useContext(AuthorizedUserContext);
  const initialValue = {
    uid: authUser.uid,
    body: "",
    createdAt: Timestamp.now(),
    createdBy: authUser.name,
    postedByAvatarUrl: authUser.avatarUrl,
    likedBy: [],
    numberOfLikes: 0,
  };
  const { classes } = useStyles();
  const { handleChanges, handleSubmit, input } = useInput(initialValue, () => {
    addComment(post.postId, post, input);
    const updatedPosts = posts;
    updatedPosts.forEach((postItem) => {
      if (postItem.postId === post.postId) {
        console.log(postItem.postId === post.postId);
        return { ...postItem, comments: [...postItem.comments, input] };
      }
    });
    // console.log(updatedPosts);
    setPosts(...updatedPosts);
  });

  return (
    <Transition
      mounted={visible}
      transition="fade"
      duration={500}
      timingFunction="ease"
    >
      {(styles) => (
        <div className={classes.container} style={styles}>
          <div>
            <Textarea
              placeholder="Add a comment"
              required
              name="body"
              onChange={handleChanges}
              value={input.body}
            />
            <Button
              className={classes.button}
              onClick={handleSubmit}
              fullWidth
              mt="xl"
            >
              Submit
            </Button>
          </div>
        </div>
      )}
    </Transition>
  );
}
export default AddComment;

import { Textarea, Transition, createStyles, ActionIcon } from "@mantine/core";
import { ArrowRight } from "tabler-icons-react";
import React, { useContext } from "react";
import { useInput } from "../hooks/useInput";
import { Timestamp } from "firebase/firestore";
import AuthorizedUserContext from "../contexts/AuthorizedUserContext";
import NotificationContext from "../contexts/NotificationContext";
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

function AddComment({ visible, post, setCommentsList, commentsList }) {
  const { authUser } = useContext(AuthorizedUserContext);
  const { setNotificationOpen, setMessage } = useContext(NotificationContext);
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
  const { handleChanges, handleSubmit, input, setInput } = useInput(
    initialValue,
    () => {
      addComment(post.postId, post, input);
      setCommentsList([...commentsList, input]);
      setInput(initialValue);
      setNotificationOpen(true);
      setMessage("Comment added");
    }
  );
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
              mb={25}
              placeholder="Add a comment"
              required
              name="body"
              onChange={handleChanges}
              value={input.body}
              rightSection={
                <ActionIcon
                  onClick={handleSubmit}
                  size={32}
                  radius="xl"
                  color="blue"
                  variant="filled"
                  mr={5}
                >
                  <ArrowRight />
                </ActionIcon>
              }
            />
          </div>
        </div>
      )}
    </Transition>
  );
}
export default AddComment;

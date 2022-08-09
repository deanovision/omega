import React, { useContext } from "react";
import { Timestamp } from "firebase/firestore";
import {
  Textarea,
  Button,
  Container,
  Card,
  createStyles,
  Group,
  Divider,
} from "@mantine/core";
import { addMessage } from "../firebase/messageModel";
import { useInput } from "../hooks/useInput";
import AuthorizedUserContext from "../contexts/AuthorizedUserContext";
import NotificationContext from "../contexts/NotificationContext";

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

function AddDirectMessage({ setOpened, recipient }) {
  const { classes } = useStyles();
  const { authUser } = useContext(AuthorizedUserContext);
  const { uid, name } = authUser;
  const { setMessage, setNotificationOpen } = useContext(NotificationContext);
  const initialValue = {
    uid: uid,
    body: "",
    createdAt: Timestamp.now(),
    messageBy: name,
    read: false,
  };
  const { input, setInput, handleChanges, handleSubmit } = useInput(
    initialValue,
    () => {
      addMessage(authUser, recipient, input, () => {
        setOpened(false);
        setMessage("Sent");
        setNotificationOpen(true);
        setInput(initialValue);
      });
    }
  );
  return (
    <Container padding="xs">
      <Card>
        <Group>
          {/* <Avatar
            radius={100}
            size={75}
            src={authUser.avatarUrl}
            alt={authUser.userName}
            mb="auto"
          /> */}
          <Textarea
            name="body"
            value={input.body}
            onChange={handleChanges}
            placeholder="What's on your mind?"
            required
            minRows={4}
            variant="unstyled"
          />
        </Group>
        <Divider my="sm" />
        <Button
          className={classes.button}
          onClick={handleSubmit}
          fullWidth
          mt="sm"
        >
          Send it
        </Button>
      </Card>
    </Container>
  );
}
export default AddDirectMessage;

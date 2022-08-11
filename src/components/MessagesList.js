import React, { useState, useEffect, useMemo } from "react";
import { uuidv4 as uuid } from "@firebase/util";
// import AuthorizedUserContext from "../contexts/AuthorizedUserContext";
import { Container } from "@mantine/core";
import { getMessages } from "../firebase/messageModel";
import { Avatar, Group, Text, Card, Textarea, ActionIcon } from "@mantine/core";
import { ArrowRight } from "tabler-icons-react";
import { useInput } from "../hooks/useInput";
// import DirectMessagePreviewCard from "./DirectMessagePreviewCard";
import { useParams } from "react-router-dom";
import ContentSkeleton from "./ContentSkeleton";

function MessagesList({ conversationsList, authUser }) {
  const initialValue = {
    messageBy: authUser.name,
    body: "",
    uid: authUser.uid,
  };
  const { conversationId } = useParams();
  const [messagesList, setMessagesList] = useState([initialValue]);
  const { handleChanges, handleSubmit, input, setInput } = useInput(
    initialValue,
    () => {
      console.log(input);
      setMessagesList((messagesList) => [...messagesList, input]);
      setInput(initialValue);
    }
  );
  //   const { authUser } = useContext(AuthorizedUserContext);

  const selectedConversation = useMemo(() => {
    const getCurrentConversation = conversationsList.filter(
      (conversation) => conversation.conversationId === conversationId
    );
    return getCurrentConversation;
  }, [conversationsList, conversationId]);
  useEffect(() => {
    // console.log("SELECTED CONVERSATION", selectedConversation);
    conversationsList.length > 0 &&
      getMessages(
        conversationId,
        selectedConversation[0],
        authUser.uid,
        setMessagesList
      );
  }, [authUser, conversationsList, conversationId, selectedConversation]);
  // console.log("MESSAGES LIST", messagesList);

  const content =
    selectedConversation[0] && selectedConversation[0].avatarUrl !== "" ? (
      messagesList.map((message) => {
        console.log("MESSAGE", message);
        return (
          <Card
            key={message.messageId === undefined ? uuid() : message.messageId}
          >
            <Group>
              <Avatar
                src={
                  message.uid === authUser.uid
                    ? authUser.avatarUrl
                    : selectedConversation[0].avatarUrl
                }
                radius={100}
              />
              <Text size="sm" lineClamp={1}>
                {message.body}
              </Text>
            </Group>
            {/* <Text size="md" weight={500}>
            {message.messageBy}
          </Text> */}
          </Card>
        );
      })
    ) : (
      <ContentSkeleton />
    );
  //   debugger;
  return (
    <Container>
      {/* <Text align="center" weight={700}>
        In this conversation
      </Text>
      <Group style={{ maxWidth: "116px", margin: "0 auto" }}>
        <Avatar size={50} src={authUser.avatarUrl} radius={100} />
        <Avatar
          size={50}
          src={selectedConversation[0].avatarUrl}
          radius={100}
        />
      </Group> */}
      {content}{" "}
      <Textarea
        mb={25}
        placeholder="What is on your mind?"
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
    </Container>
  );
}
export default MessagesList;

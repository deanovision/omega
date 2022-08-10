import React, { useState, useEffect } from "react";
// import AuthorizedUserContext from "../contexts/AuthorizedUserContext";
import { Container } from "@mantine/core";
import { getMessages } from "../firebase/messageModel";
import { Avatar, Group, Text, Card } from "@mantine/core";
// import DirectMessagePreviewCard from "./DirectMessagePreviewCard";
import { useParams } from "react-router-dom";

function MessagesList({ conversationsList, authUser }) {
  const { conversationId } = useParams();
  const [messagesList, setMessagesList] = useState([
    {
      messageBy: "John Doe",
      body: "",
    },
  ]);
  //   const { authUser } = useContext(AuthorizedUserContext);

  const selectedConversation = conversationsList.filter(
    (conversation) => conversation.conversationId === conversationId
  );
  useEffect(() => {
    console.log("SELECTED CONVERSATION", selectedConversation);
    getMessages(
      conversationId,
      selectedConversation[0],
      authUser.uid,
      setMessagesList
    );
  }, [authUser, conversationsList]);
  console.log("MESSAGES LIST", messagesList);

  const content = messagesList.map((message) => {
    return (
      <>
        <Card key={message.messageId}>
          <Text size="md" weight={500}>
            {message.messageBy}
          </Text>
          <Text size="sm" lineClamp={1}>
            {message.body}
          </Text>
        </Card>
      </>
    );
  });
  //   debugger;
  return <Container>{content}</Container>;
}
export default MessagesList;

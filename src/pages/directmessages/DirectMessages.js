import React, { useState, useContext, useEffect } from "react";
import AuthorizedUserContext from "../../contexts/AuthorizedUserContext";
import { Container, Card } from "@mantine/core";
import DirectMessagesList from "../../components/DirectMessagesList";
import { getConversations } from "../../firebase/messageModel";
import MessagesList from "../../components/MessagesList";
import { Routes, Route } from "react-router-dom";

function DirectMessages() {
  const { authUser } = useContext(AuthorizedUserContext);
  const [selectedConversationId, setSelectedConversationId] = useState("");
  const [conversationsList, setConversationsList] = useState([
    {
      name: "John Doe",
      avatarUrl: "/",
      messages: [
        {
          body: "Hey",
        },
      ],
      conversationId: "0",
      users: [],
    },
  ]);
  useEffect(() => {
    getConversations(authUser.uid, setConversationsList);
  }, [authUser]);
  console.log(selectedConversationId);
  // const selectedConversation = conversationsList.filter(
  //   (conversation) => conversation.conversationId === selectedConversationId
  // );
  // console.log(selectedConversation, "SELECTED CONVERSATION");
  return (
    <>
      <Container mt={20} size="md" px={0}>
        <Card withBorder p="xl" radius="sm">
          <Routes>
            <Route
              path="/"
              element={
                <DirectMessagesList
                  {...{
                    conversationsList,
                    authUser,
                    setSelectedConversationId,
                  }}
                />
              }
            />
            <Route
              path="/:conversationId"
              element={<MessagesList {...{ conversationsList, authUser }} />}
            />
          </Routes>
        </Card>
      </Container>
    </>
  );
}
export default DirectMessages;

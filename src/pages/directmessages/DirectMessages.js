import React from "react";
import { useEffect, useState, useContext } from "react";
import { Container, Card } from "@mantine/core";
import { getMessages } from "../../firebase/messageModel";
import DirectMessagesList from "../../components/DirectMessagesList";
import AuthorizedUserContext from "../../contexts/AuthorizedUserContext";
import { useParams } from "react-router-dom";

function DirectMessages() {
  const { authUser } = useContext(AuthorizedUserContext);
  const uid = useParams();
  //   useEffect(() => {
  //     console.log("UE");
  //     getMessages(uid, (messages) => {
  //       setConversationsList(messages);
  //     });
  //   }, [uid]);

  return (
    <>
      <Container mt={20} size="md" px={0}>
        <Card withBorder p="xl" radius="sm">
          {/* {conversationsList.length > 0 ? (
            <DirectMessagesList {...{ uid }} />
          ) : null} */}
          {/* <DirectMessagesList {...{ conversationsList }} /> */}
          <DirectMessagesList />
        </Card>
      </Container>
    </>
  );
}
export default DirectMessages;

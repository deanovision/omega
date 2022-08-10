import React, { useState, useEffect, useContext } from "react";
import AuthorizedUserContext from "../contexts/AuthorizedUserContext";
import { Container } from "@mantine/core";
import { getConversations } from "../firebase/messageModel";
import DirectMessagePreviewCard from "./DirectMessagePreviewCard";
import { Link } from "react-router-dom";

function DirectMessagesList({ conversationsList, authUser }) {
  console.log("CONVERSATIONS LIST", conversationsList);
  const content = conversationsList.map((conversation) => {
    return (
      <>
        <Link
          to={`/auth/users/directMessages/${authUser.uid}/${conversation.conversationId}`}
          style={{ textDecoration: "none" }}
        >
          <DirectMessagePreviewCard
            key={conversation.conversationId}
            {...{ conversation, uid: authUser.uid }}
          />
        </Link>
      </>
    );
  });
  return <Container>{content}</Container>;
}
export default DirectMessagesList;

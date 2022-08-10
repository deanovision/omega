import React, { useState, useEffect, useContext } from "react";
import AuthorizedUserContext from "../contexts/AuthorizedUserContext";
import { Container } from "@mantine/core";
import { getConversations } from "../firebase/messageModel";
import DirectMessageSimple from "./DirectMessageSimple";

// const useStyles = createStyles((theme) => ({
//   listContainer: {
//     display: "flex",
//   },
//   container: {
//     display: "flex",
//     alignItems: "center",
//   },
//   userInfo: {
//     width: "90%",
//   },
//   buttonContainer: {
//     width: "10%",
//   },

//   textContainer: {
//     width: "100%",
//     textAlign: "left",
//     justifyContent: "space-between",
//     paddingLeft: 20,
//   },
// }));

function DirectMessagesList() {
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
    },
  ]);
  const { authUser } = useContext(AuthorizedUserContext);
  //   const { uid } = useParams();

  useEffect(() => {
    getConversations(authUser.uid, setConversationsList);
  }, [authUser]);
  console.log("CONVERSATIONS LIST", conversationsList);
  const content = conversationsList.map((conversation) => {
    return (
      <DirectMessageSimple
        key={conversation.conversationId}
        conversation={conversation}
      />
    );
  });
  return <Container>{content}</Container>;
}
export default DirectMessagesList;

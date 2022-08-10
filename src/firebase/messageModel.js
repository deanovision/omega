import { db } from "./config";
import {
  setDoc,
  doc,
  addDoc,
  collection,
  Timestamp,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { sortUids } from "../utils/helperFunctions";
import { fetchUser } from "./userModel";

export const addMessage = async (
  authUser,
  recipient,
  message = { body: "test" },
  callback
) => {
  try {
    const directMessageDocId = sortUids([authUser.uid, recipient.uid]);
    const directMessageDocRef = doc(db, "directMessages", directMessageDocId);
    setDoc(
      directMessageDocRef,
      {
        lastMessageSentAt: Timestamp.now(),
        lastMessage: message.body,
        users: [authUser.uid, recipient.uid],
        subcollectionRef: await addDoc(
          collection(db, "directMessages", directMessageDocId, "messages"),
          { ...message, participants: [authUser.uid, recipient.uid] }
        ),
      },
      { merge: true }
    );
    callback();
  } catch (err) {
    console.log(err.message);
  }
};
export const getConversations = async (uid, callback) => {
  try {
    const q1 = query(
      collection(db, "directMessages"),
      where("users", "array-contains", uid)
    );
    const conversationsQuerySnapshot = await getDocs(q1);
    let conversationsArray = [];

    conversationsQuerySnapshot.forEach(async (conversation) => {
      const conversationParticipantId = conversation
        .data()
        .users.filter((id) => id !== uid)[0];
      const conversationParticipant = await fetchUser(
        conversationParticipantId
      );
      const { name, avatarUrl } = conversationParticipant;
      conversationsArray.push({
        ...conversation.data(),
        name,
        avatarUrl,
        conversationId: conversation.id,
      });
      callback([...conversationsArray]);
    });
    return conversationsArray;
  } catch (err) {
    console.log(err.message);
  }
};

export const getMessages = async (conversation, uid) => {
  //Get id of the other party in the conversation
  try {
    const conversationParticipantId = conversation.users.filter(
      (id) => id !== uid
    )[0];
    const conversationParticipant = await fetchUser(conversationParticipantId);
    const { name, avatarUrl } = conversationParticipant;
    const { conversationId } = conversation;
    const q2 = query(
      collection(db, "directMessages", conversationId, "messages"),
      where("participants", "array-contains", uid),
      orderBy("createdAt", "asc")
    );
    let messagesArray = [];
    const messagesQuerySnapshot = await getDocs(q2);
    messagesQuerySnapshot.forEach((message) =>
      messagesArray.push({ ...message.data(), avatarUrl, name })
    );
    return messagesArray;
  } catch (err) {
    console.log(err.message);
  }
};

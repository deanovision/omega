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
  onSnapshot,
} from "firebase/firestore";
import { sortUids } from "../utils/helperFunctions";
import { fetchUser } from "./userModel";

export const addMessage = async (
  authUser,
  recipientId,
  message = { body: "test" },
  callback
) => {
  try {
    const directMessageDocId = sortUids([authUser.uid, recipientId]);
    const directMessageDocRef = doc(db, "directMessages", directMessageDocId);
    setDoc(
      directMessageDocRef,
      {
        lastMessageSentAt: Timestamp.now(),
        lastMessage: message.body,
        users: [authUser.uid, recipientId],
        subcollectionRef: await addDoc(
          collection(db, "directMessages", directMessageDocId, "messages"),
          { ...message, participants: [authUser.uid, recipientId] }
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

export const getMessages = async (
  conversationId,
  conversation,
  uid,
  callback
) => {
  // console.log(conversation.users, "<==================");
  //Get id of the other party in the conversation
  try {
    if (conversation === undefined) return;
    const conversationParticipantId = conversation.users.filter(
      (id) => id !== uid
    )[0];
    const conversationParticipant = await fetchUser(conversationParticipantId);
    const { name, avatarUrl } = conversationParticipant;
    // const { conversationId } = conversation;
    const q2 = query(
      collection(db, "directMessages", conversationId, "messages"),
      where("participants", "array-contains", uid),
      orderBy("createdAt", "asc")
    );
    // let messagesArray = [];
    let messagesArray = new Set();
    const messagesQuerySnapshot = await getDocs(q2);
    messagesQuerySnapshot.forEach((message) => {
      // messagesArray.push({
      //   ...message.data(),
      //   avatarUrl,
      //   name,
      //   messageId: message.id,
      // });
      messagesArray.add({
        ...message.data(),
        avatarUrl,
        name,
        messageId: message.id,
      });
      // callback(Array.from(messagesArray));
      callback([...messagesArray]);
    });

    const unsubscibe = await onSnapshot(q2, (querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        messagesArray.add(change.doc.data());
        callback([...messagesArray]);
        // if (change.type === "added") {
        //   return messagesArray.includes(change.doc.data())
        //     ? null
        //     : callback([...messagesArray, change.doc.data()]);
        // }
      });
    });
    return messagesArray;
  } catch (err) {
    console.log(err.message);
  }
};

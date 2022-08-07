import { db } from "./config";
import {
  setDoc,
  doc,
  addDoc,
  collection,
  arrayUnion,
  Timestamp,
  getDoc,
  getDocs,
  query,
  where,
  //   orderBy,
  //   updateDoc,
  //   arrayRemove,
  //   writeBatch,
} from "firebase/firestore";
import { sortUids } from "../utils/helperFunctions";

export const addMessage = async (
  authUser,
  recipient,
  message = { body: "test" }
) => {
  const directMessageDocId = sortUids([authUser.uid, recipient.uid]);
  const directMessageDocRef = doc(db, "directMessages", directMessageDocId);
  setDoc(
    directMessageDocRef,
    {
      users: [authUser.uid, recipient.uid],
      subcollectionRef: await addDoc(
        collection(db, "directMessages", directMessageDocId, "messages"),
        {
          ...message,
          createdAt: Timestamp.now(),
        }
      ),
    },
    { merge: true }
  );
};

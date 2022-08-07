import { db } from "./config";
import {
  setDoc,
  doc,
  addDoc,
  collection,
  arrayUnion,
  Timestamp,
  //   getDoc,
  //   getDocs,
  //   query,
  //   where,
  //   orderBy,
  //   updateDoc,
  //   arrayRemove,
  //   writeBatch,
} from "firebase/firestore";

// export const addMessage = (authUserData, recipientUserData, message, callback) => {
//     addDoc(collection(db, "messages"), message)
//       .then((res) => {
//         console.log("success, post has been added", res.id);
//         callback();
//         updateRecentPosts(uid, post, res.id);
//         //   window.location.reload()
//       })
//       .catch((err) => {
//         console.error("Error adding document", err);
//       });
//   };
//   export const updateRecentPosts = (uid, post, postId) => {
//     setDoc(
//       doc(db, "followers", uid),
//       {
//         recentPosts: arrayUnion({ ...post, postId: postId }),
//         lastPost: Timestamp.now(),
//         uid: uid,
//       },
//       { merge: true }
//     )
//       .then(() => {
//         console.log("success, post has been added to recent posts");
//       })
//       .catch((err) => {
//         console.error("Error adding document", err);
//       });
//   };

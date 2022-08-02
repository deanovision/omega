import { db } from "./config";
import {
  writeBatch,
  setDoc,
  doc,
  getDoc,
  Timestamp,
  getDocs,
  collection,
  query,
  orderBy,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
// import { GoogleAuthProvider, getRedirectResult } from "firebase/auth";

export const addNewUser = (user) => {
  setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    userName: "",
    avatarUrl: "",
    bio: "",
    followers: 0,
    following: [],
    posts: 0,
    createdAt: Timestamp.fromDate(new Date()),
  })
    .then(() => {
      console.log("success, user has been added", user.uid);
      return user.uid;
    })
    .catch((err) => {
      console.error("Error adding document", err);
    });
};
export const updateUser = async (user) => {
  const batch = writeBatch(db);
  const userDocRef = doc(db, "users", user.uid);
  const followersDocRef = doc(db, "followers", user.uid);

  try {
    batch.set(userDocRef, user);
    batch.update(followersDocRef, {
      avatarUrl: user.avatarUrl,
    });
    await batch.commit();
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};

export const getUserById = (user) => {
  console.log("get users by ID", user);
  return getDoc(doc(db, "users", user.uid))
    .then((res) => {
      console.log("users document data", res.data());
      return res.data();
    })
    .catch((err) => console.log("Error getting document:", err));
};

export const fetchUser = (uid) => {
  return getDoc(doc(db, "users", uid))
    .then((res) => {
      console.log("users document data", res.data());
      return res.data();
    })
    .catch((err) => console.log("Error getting document:", err));
};

export const fetchUsers = async (setUsers) => {
  try {
    const q = query(collection(db, "users"), orderBy("name", "asc"));
    const querySnapshot = await getDocs(q);
    let userArray = [];
    querySnapshot.forEach((user) => {
      userArray.push(user.data());
    });
    setUsers(userArray);
  } catch (error) {
    console.error(error.message);
  }
};

export const followUser = (myUid, userUid) => {
  updateDoc(doc(db, "users", myUid), {
    following: arrayUnion(userUid),
  })
    .then((res) => {
      console.log("user successfully added", res);
      setDoc(
        doc(db, "followers", userUid),
        {
          followerList: arrayUnion(myUid),
        },
        { merge: true }
      );
    })
    .catch((err) => console.log(err.message));
};
// export const addUser = (user, setError)=> {
//     setDoc(doc(db, "users", user.uid), user)
//       .then(() => {
//           console.log("success, user has been added", user.uid)
//           setError("")
//       })
//       .catch(err => {
//           console.error("Error adding document", err)
//           setError(err.message)
//       })
//   }
// export const addUserFromRedirectResult = (auth)=> {
//     getRedirectResult(auth)
//     .then((result) => {
//      const token = GoogleAuthProvider.credentialFromResult(result)?.accessToken
//      const user = result.user;
//      addUser(user)
//      console.log('user', user)
//      console.log("token", token)
//    }).catch((error) => {
//      const errorCode = error.code;
//      const errorMessage = error.message;
//      const email = error.customData.email;
//      const credential = GoogleAuthProvider.credentialFromError(error);
//      console.log(errorCode, errorMessage, email, credential)
//      alert(error)
//    });
// }

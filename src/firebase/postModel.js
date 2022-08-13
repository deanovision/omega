import { db } from "./config";
import {
  setDoc,
  doc,
  getDoc,
  getDocs,
  addDoc,
  collection,
  query,
  where,
  orderBy,
  arrayUnion,
  Timestamp,
  updateDoc,
  arrayRemove,
  writeBatch,
} from "firebase/firestore";

export const addPost = (uid, post, callback) => {
  addDoc(collection(db, "posts"), post)
    .then((res) => {
      console.log("success, post has been added", res.id);
      callback();
      updateRecentPosts(uid, post, res.id);
      //   window.location.reload()
    })
    .catch((err) => {
      console.error("Error adding document", err);
    });
};
export const updateRecentPosts = (uid, post, postId) => {
  setDoc(
    doc(db, "followers", uid),
    {
      recentPosts: arrayUnion({ ...post, postId: postId }),
      lastPost: Timestamp.now(),
      uid: uid,
    },
    { merge: true }
  )
    .then(() => {
      console.log("success, post has been added to recent posts");
    })
    .catch((err) => {
      console.error("Error adding document", err);
    });
};
export const fetchPostsByUserId = async (uid, setPosts) => {
  try {
    const q = query(
      collection(db, "posts"),
      where("uid", "==", uid),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    let postsArray = [];
    querySnapshot.forEach((doc) => {
      postsArray.push({ ...doc.data(), postId: doc.id });
    });
    setPosts(postsArray);
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchRecentPosts = async (uid, setPosts) => {
  try {
    const q = query(
      collection(db, "followers"),
      where("followerList", "array-contains", uid),
      orderBy("lastPost", "desc")
    );
    const querySnapshot = await getDocs(q);
    let postsArray = [];
    querySnapshot.forEach((doc) => {
      postsArray.push(doc.data());
    });
    setPosts(postsArray);
  } catch (err) {
    console.log(err.message);
  }
};

export const addComment = async (postId, post, comment) => {
  try {
    //update comments array on post document
    updateDoc(doc(db, "posts", postId), {
      comments: arrayUnion(comment),
    });
  } catch (err) {
    console.log("Failed at step 1", err.message);
  }
  try {
    //remove the outdated post from followers document
    updateDoc(doc(db, "followers", post.uid), {
      recentPosts: arrayRemove(post),
    });
  } catch (err) {
    console.log("Failed at step 2", err.message);
  }
  try {
    //fetch latest post with newly added comment
    const updatedPost = await getDoc(doc(db, "posts", postId));
    //update followers document with latest post inlcuding the comment
    updateDoc(doc(db, "followers", post.uid), {
      recentPosts: arrayUnion(updatedPost.data()),
      avatarUrl: post.postedByAvatarUrl,
    });
  } catch (err) {
    console.log("Failed at step 3", err.message);
  }
};
export const deletePost = async (post, callback) => {
  const { postId, uid } = post;
  const batch = writeBatch(db);
  const postDocRef = doc(db, "posts", postId);
  const followersDocRef = doc(db, "followers", uid);

  try {
    batch.delete(postDocRef);
    batch.update(followersDocRef, {
      recentPosts: arrayRemove(post),
    });
    await batch.commit();
    callback();
  } catch (err) {
    console.log(err.message);
  }
};

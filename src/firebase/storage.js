import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./config";


// Create a storage reference from our storage service
const storageRef = ref(storage);



export const uploadAvatar = (file, setAvatarUrl, setUploadProgress, uid) => {
  const avatarsRef = ref(storage, `avatars/${uid}/${file.name}`)
  const uploadTask = uploadBytesResumable(avatarsRef, file); 

    uploadTask.on('state_changed', (snapshot) => {
      console.log("SNAPSHOT TRANSFERRED", snapshot.bytesTransferred)
      console.log("SNAPSHOT TOTAL BYTES", snapshot.totalBytes)
      
    const progress = (Number(snapshot.bytesTransferred) / Number(snapshot.totalBytes)) * 100;
    setUploadProgress(progress)

    console.log('Upload is ' + progress + '% done');

    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setAvatarUrl(downloadURL)
      console.log('File available at', downloadURL);
    });
  }
);

}
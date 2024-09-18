import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './FirebaseConfig'; // Make sure the path is correct

function Upload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;

    const fileRef = ref(storage, `files/${file.name}`);
    
    const uploadTask = uploadBytes(fileRef, file);

    uploadTask.then((snapshot) => {
      console.log('Upload complete:', snapshot);
      
      // Calculate upload progress
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progress);

      // Get the download URL after the upload is complete
      return getDownloadURL(fileRef);
    }).then((url) => {
      console.log('File available at', url);
    }).catch((error) => {
      console.error('Upload failed:', error);
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <progress value={progress} max="100" />
    </div>
  );
}

export default Upload;

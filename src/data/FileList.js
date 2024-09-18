// src/components/FileList.js
import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';

function FileList() {
  const [fileUrls, setFileUrls] = useState([]);

  useEffect(() => {
    storage
      .ref('files')
      .listAll()
      .then((res) => {
        const promises = res.items.map((item) => item.getDownloadURL());
        return Promise.all(promises);
      })
      .then((urls) => {
        setFileUrls(urls);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>File List</h2>
      {fileUrls.map((url, index) => (
        <div key={index}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            File {index + 1}
          </a>
        </div>
      ))}
    </div>
  );
}

export default FileList;

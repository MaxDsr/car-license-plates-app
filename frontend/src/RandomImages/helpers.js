import axios from "axios";
import {v4 as uniqueKey} from "uuid";

export function getRandomImages(setImagesInProgress, setSlidersData) {
  setImagesInProgress(true);
  const requests = [];
  for (let i = 0; i < 6; i++) {
    requests.push(axios.get('https://picsum.photos/300/200', { responseType: 'blob' }));
  }

  Promise.all(requests)
    .then((responses) => {
      const blobs = responses.map((response) => response.data);
      return blobs.map((item) => loadFileToDataURL(item));
    })
    .then((blobsLoading) => Promise.all(blobsLoading))
    .then((loadedImages) => {
      setSlidersData(loadedImages.map((image) => ({ uniqueKey: uniqueKey(), image: image })));
      setImagesInProgress(false);
    });
}

function loadFileToDataURL(file) {
  const reader = new FileReader();
  return new Promise((resolve) => {
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });
}
import { useEffect, useState } from 'react'
import './App.css'
import Box from './components/box'
import Post from './components/post';

function App() {

const [arrayOfPictures,setArrayOfPictures] = useState([])


async function fetchImages() {
  const fetchedImages = await fetch("https://picsum.photos/v2/list?page=3&limit=25");
  const dataReceived = await fetchedImages.json();
  setArrayOfPictures(dataReceived);
  console.log("hello");
}

useEffect(() => {
  fetchImages() 
},[])


  return (
    <>
    <button onClick={() => fetchImages()}>Get Images</button>
    <h1>My React Refresh App</h1>
    {arrayOfPictures.map((item, index) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <Post url={item.download_url} author={item.author}></Post>
      )
    })}

    </>
  )
}

export default App
import { useEffect, useState } from 'react';
import "./app.css"   
import Post from './components/post';
import Register from './components/register';

function App() {
  const [arrayOfPictures, setArrayOfPictures] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("https://picsum.photos/v2/list?page=3&limit=25");
        if (!response.ok) throw new Error("Failed to fetch images");
        const data = await response.json();
        setArrayOfPictures(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
    fetchImages();
  }, []);

  function handleLoginLogout() {
    setIsLoggedIn(prevState => !prevState);
  }

  return (
    <div className="centered-container">
      <header className="header">
        <div className="container">
          <h1 className="logo">Instagram Clone</h1>
          <Register />
          <button onClick={handleLoginLogout} className="login-button" aria-label={isLoggedIn ? 'Logout' : 'Login'}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      </header>
      <main className="main-content">
        {isLoggedIn ? (
          <div className="post-grid">
            {arrayOfPictures.map((item, index) => (
              <Post key={index} url={item.download_url} author={item.author} />
            ))}
          </div>
        ) : (
          <div className="login-message">
            <p>Please log in to view posts</p>
          </div>
        )}
      </main>
    </div>
  );
}
export default App;

import { useEffect, useState } from 'react';
import './App.css';
import Post from './components/post';
import Login from './components/login';
import Register from './components/register';

function App() {
    const [arrayOfPictures, setArrayOfPictures] = useState([]); 
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    async function fetchImages() {
        const fetchedImages = await fetch("https://picsum.photos/v2/list?page=3&limit=25");
        const dataReceived = await fetchedImages.json();
        setArrayOfPictures(dataReceived);
    }

    function loginLogout() {
        setIsLoggedIn(!isLoggedIn); 
    }

    function handleLogout() {
        setIsLoggedIn(false); 
    }

    useEffect(() => {
        if (isLoggedIn) { 
            fetchImages(); 
        }
    }, [isLoggedIn]); // displays images only when logged in

    return (
        <div className="app">
            <div className="centered-container">
                <header className="header">
                    <div className="container">
                        <h1 className="logo">Instagram Clone</h1>
                        {isLoggedIn && (
                            <button onClick={handleLogout} className="logout-button">LogOut</button>  //Shows logout button only when logged in
                        )}
                    </div>
                </header>
                <main className="main-content">
                    <div className="centered-form"> 
                        {!isLoggedIn && ( // If not logged in, hide images and show Register and Login components
                            <>
                                <Register />
                                <Login onLogin={loginLogout} /> {/* Pass loginLogout as a prop */}
                            </>
                        )}
                    </div>
                    {isLoggedIn ? ( // If logged in, display images without login and Register components
                        <div className="post-grid">
                            {arrayOfPictures.map((item, index) => (
                                <Post key={index} url={item.download_url} author={item.author} />
                            ))}
                        </div>
                    ) : ( // If not logged in, show login message
                        <div className="login-message">
                            <p>Please log in to view posts</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default App;

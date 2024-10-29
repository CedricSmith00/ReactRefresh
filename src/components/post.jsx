import React, { useState } from "react";
import { Heart } from "lucide-react";

function Post({ url, author }) {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 1000));
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="post-header">
        <img
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${author}`}
          alt={author}
          className="profile-img"
        />
        <span className="author-name">{author}</span>
      </div>
      <img src={url} alt={`Post by ${author}`} className="post-image" />
      <div className="post-footer">
        <button onClick={handleLike} className={`like-button ${isLiked ? "liked" : ""}`}>
          <Heart className="heart-icon" />
          <span className="likes-count">{likes} likes</span>
        </button>
      </div>
    </div>
  );
}

export default Post;

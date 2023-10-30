import { useState } from "react";
import "./vcet.css";

const Vcet = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  function like() {
    setLikeCount(likeCount + 1);
  }

  function handleCommentSubmit() {
    if (commentText.trim() !== "") {
      setCommentCount(commentCount + 1);
      setComments([...comments, commentText]);
      setCommentText("");
    }
  }

  function toggleComments() {
    setShowComments(!showComments);
  }

  return (
    <div className="card">
      <h1>Vcet</h1>
      <p>I am from vcet</p>
      <div className="button-group">
        <button className="like-button" onClick={like}>
          <i className="fas fa-thumbs-up"></i> {likeCount}
        </button>
        <button className="comment-button" onClick={toggleComments}>
          <i className="fas fa-comment"></i> {commentCount}
        </button>
      </div>
      <div className="comment-input">
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button className="send-button" onClick={handleCommentSubmit}>
          Send
        </button>
      </div>
      {showComments && (
        <div className="comments">
          {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vcet;

"use client"
import React, { useState, useEffect } from "react";

const CommentSec = () => {
  const [comments, setComments] = useState<{ username: string; comment: string }[]>([]);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  // Load comments from local storage on mount
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(savedComments);
  }, []);

  // Save comments to local storage whenever comments change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (username.trim() && comment.trim()) {
      const newComment = { username, comment };
      setComments([...comments, newComment]);
      setUsername("");
      setComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Comment Section</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        ></textarea>
        <button
          onClick={handleAddComment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Comment
        </button>
      </div>

      <div className="space-y-4">
        {comments.map((c, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded shadow-sm"
          >
            <h2 className="font-bold text-lg">{c.username}</h2>
            <p className="text-gray-700">{c.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSec;

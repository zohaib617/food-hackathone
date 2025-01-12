'use client'

import { useState } from 'react';

interface Comment {
  name: string;
  profilePicture: string; // Base64 or blob URL
  comment: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result as string); // Convert to base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && profilePicture && comment) {
      const newComment: Comment = { name, profilePicture, comment };
      setComments([...comments, newComment]);
      setName('');
      setProfilePicture(null);
      setComment('');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 ">



      {/* Display Comments */}
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 border rounded-md shadow-sm"
          >
            <img
              src={comment.profilePicture}
              alt={comment.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{comment.name}</p>
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>



      <h2 className="text-[32px] font-bold mb-4">Post comment</h2>

    
    
    
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-6">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border border-gray-300 p-2 rounded-md"
        />
        {profilePicture && (
          <img
            src={profilePicture}
            alt="Preview"
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <textarea
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="border border-gray-300 p-2 rounded-md"
        ></textarea>
        <button type="submit" className="bg-[#FF9F0D] w-[250px]  p-2 rounded-md hover:text-white   transform hover:scale-110 transition duration-500 ease-in-out  ">
          Submit
        </button>
      </form>

    

    </div>
  );
};

export default CommentSection;

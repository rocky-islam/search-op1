import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Description() {
  const [content, setContent] = useState('');

  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <div className="mx-auto max-w-2xl p-6 bg-white shadow-md rounded-md my-24">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Description</h2>
      <ReactQuill 
        value={content} 
        onChange={handleContentChange} 
        theme="snow"
        className="mb-4"
        placeholder="Start typing your description here..."
        modules={{
          toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['link', 'image'],
            [{ 'color': [] }, { 'background': [] }],
            ['clean']                                         
          ]
        }}
      />
      <div className="mt-4 p-4 bg-gray-100 rounded-md">
        <h3 className="font-semibold text-gray-800 mb-2">Preview:</h3>
        <div 
          className="prose text-gray-700" 
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      </div>
    </div>
  );
}

export default Description;

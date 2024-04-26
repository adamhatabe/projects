import React, { useState } from "react";

interface Note {
  title: string;
  content: string;
}

interface NoteFormProps {
  onSubmit: (note: Note) => void;
  initialNote?: Note;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit, initialNote = {} }) => {
  const [title, setTitle] = useState(initialNote.title || "");
  const [content, setContent] = useState(initialNote.content || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle(""); 
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-blue-500"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-blue-500 resize-none"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default NoteForm;

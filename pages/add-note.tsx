// pages/add-note.tsx

import Header from "@/app/components/Header";
import NoteForm from "@/app/components/NoteForm";
import axios from "axios";
import React from "react";
import "tailwindcss/tailwind.css";

const AddNotePage: React.FC = () => {
  const addNote = (title: string, content: string) => {
    axios({
      method: "POST",
      url: "/api/notes",
      data: {
        title: title,
        content: content,
      },
    })
      .then((res) => {
        console.log(res.data);
        window.location.href = "/notes";
      })
      .catch((err) => {});
  };
  return (
    <div className="flex flex-col items-center w-full  bg-gradient-to-b from-purple-700 to-purple-300  h-screen ">
      <Header />
      <h1 className="text-4xl font-bold p-5">
        What is on your mind? share your thoughts and add a new note
      </h1>
      <NoteForm
        onSubmit={(e) => {
          addNote(e.title, e.content);
        }}
      />
    </div>
  );
};

export default AddNotePage;

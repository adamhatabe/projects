import Header from "@/app/components/Header";
import NoteForm from "@/app/components/NoteForm";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";

const EditNotePage: React.FC = () => {
  const router = useRouter();
  const [note, setNote] = useState({ id: 0, title: "", content: "" });

  useEffect(() => {
    const fetchNoteDetails = async () => {
      const { id } = router.query;
      if (id && typeof id === "string") {
        try {
          const response = await axios.get(`/api/notes/${id}`);
          setNote(response.data);
        } catch (error) {
          console.error("Error fetching note details:", error);
        }
      }
    };

    fetchNoteDetails();
  }, [router.query]);

  const editNote = (title: string, content: string) => {
    axios({
      method: "PUT",
      url: `/api/notes/${note.id}`,
      data: {
        title: title,
        content: content,
      },
    })
      .then((res) => {
        console.log(res.data);
        router.push("/"); 
      })
      .catch((err) => {
        console.error("Error editing note:", err);
      });
  };

  return (
    <div className="flex flex-col items-center w-full bg-gradient-to-b from-purple-700 to-purple-300 h-screen">
      <Header />
      <h1 className="text-4xl font-bold p-5">Edit Note</h1>
      <NoteForm
        initialNote={note}
        onSubmit={(e) => {
          editNote(e.title, e.content);
        }}
      />
    </div>
  );
};

export default EditNotePage;

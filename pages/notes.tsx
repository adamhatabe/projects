import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ListNotes from "@/app/components/ListNotes";
import Header from "@/app/components/Header";

const ListNotesPage: React.FC = () => {
  const router = useRouter();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await axios.get("/api/notes");
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    getNotes();
  }, []);

  const handleNoteClick = (id: number) => {
    router.push(`/notes/${id}`);
  };

  return (
    <div className="flex flex-col items-start w-full 00 bg-gradient-to-b from-purple-700 to-purple-300 justify-center h-screen overflow-y-scroll ">
      <Header />
      <ListNotes notes={notes} onItemClick={handleNoteClick} />
    </div>
  );
};

export default ListNotesPage;

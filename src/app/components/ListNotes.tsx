import Link from "next/link";
import React, { useState } from "react";
import { MdSpeakerNotes } from "react-icons/md";
import NoteCard from "./NoteCard";
import axios from "axios";
import { useRouter } from "next/router";

interface Note {
  id: number;
  title: string;
  content: string;
}

interface ListNotesProps {
  notes: Note[];
}

const ListNotes: React.FC<ListNotesProps> = ({ notes }) => {
  const router = useRouter();
  const [noteData, setNoteData] = useState<Note[]>(notes);

  const handleEditNote = (id: number) => {
    router.push(`/edit-note?id=${id}`);
  };

  const handleDeleteNote = async (id: number) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      setNoteData((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="flex flex-col text-xl h-screen space-y-10 p-10">
      <div className="flex items-center text-4xl space-x-2">
        <MdSpeakerNotes />
        <h2 className="font-bold">Notes</h2>
      </div>
      <Link href="/add-note">
        <button className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300">
          Add Note
        </button>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-2">
        {noteData.map((note, index) => (
          <NoteCard
            opened={false}
            id={note.id}
            key={index}
            title={note.title}
            content={note.content}
            onEdit={() => handleEditNote(note.id)}
            onDelete={() => handleDeleteNote(note.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListNotes;

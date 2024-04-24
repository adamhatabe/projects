// components/ViewNote.tsx

import React from "react";
import NoteCard from "./NoteCard";
import deleteNote from "../../../api/api";

interface Note {
  id: number;
  title: string;
  content: string;
}

interface ViewNoteProps {
  note: Note;
}

const ViewNote: React.FC<ViewNoteProps> = ({ note }) => {
  return (
    <NoteCard
      onDelete={() => {
        deleteNote(note.id);
      }}
      opened={true}
      title={note.title}
      content={note.content}
      id={note.id}
    />
  );
};

export default ViewNote;

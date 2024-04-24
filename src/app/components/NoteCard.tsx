import { Note } from "@prisma/client";
import React, { MouseEventHandler } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
type NoteCardProps = {
  id: number;
  title: string;
  content: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onClicks?: MouseEventHandler<HTMLDivElement>;
  opened: boolean;
};
const NoteCard = (Props: NoteCardProps) => {
  return (
    <div
      onClick={Props.onClicks}
      className="bg-yellow-100 rounded-lg flex flex-col justify-between items-center p-10 shadow-xl hover:bg-yellow-300 cursor-pointer"
    >
      <h2 className="text-xl font-semibold mb-2">{Props.title}</h2>
      {Props.opened && <p className="text-gray-800 mb-4">{Props.content}</p>}

      <div className="flex justify-end">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md mr-2 transition duration-300"
          onClick={Props.onEdit}
        >
          <CiEdit />
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-300"
          onClick={Props.onDelete}
        >
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;

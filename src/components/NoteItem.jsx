import React, { useState } from "react";

import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

export default function NoteItem({
  note,
  setShowModal,
  setSelectedNote,
  selectedNote,
  setNotes,
  notes,
}) {
  const [completed, setCompleted] = useState(false);
  function deleteNote() {
    setNotes((prev) => prev.filter((item) => item.id !== selectedNote));
  }
  return (
    <div
      onClick={() => setSelectedNote(note.id)}
      className={`mx-3 flex justify-between ${
        completed ? "bg-green-500" : "bg-white"
      } ${selectedNote == note.id ? "shadow-xl" : ""}`}
    >
      <div>
        <h3 className=" text-5xl">{note.title}:</h3>
        <h4 className=" text-2xl ml-8 italic text-gray-700 ">
          {note.description}
        </h4>
      </div>
      <div className="flex space-x-3">
        {completed ? (
          <GiCancel size={40} onClick={() => setCompleted(false)} />
        ) : (
          <BsCheckCircleFill size={40} onClick={() => setCompleted(true)} />
        )}
        <AiFillEdit
          size={40}
          onClick={() => {
            setShowModal(true);
          }}
        />
        <AiFillDelete size={40} onClick={deleteNote} />
      </div>
    </div>
  );
}

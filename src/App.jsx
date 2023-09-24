import { useState } from "react";
import NoteItem from "./components/NoteItem";
import Modal from "./components/Modal";
import { BsPlusCircle } from "react-icons/bs";
function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState("");
  const [showModal, setShowModal] = useState(false);
  const notesDisplay = notes?.map((note, i) => {
    return (
      <div key={i} className="flex flex-col w-full">
        <NoteItem
          notes={notes}
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          note={note}
          showModal={showModal}
          setShowModal={setShowModal}
          setNotes={setNotes}
        />
      </div>
    );
  });
  return (
    <>
      <h1 className="text-4xl text-center text-bold text-blue-950 m-4 ">
        Todo App
      </h1>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setNotes={setNotes}
        selectedNote={selectedNote}
        notes={notes}
      />

      <main className=" mt-36 mx-auto  shadow-md rounded-sm">
        {notes.length > 0 ? (
          <div>
            <BsPlusCircle
              className="text-4xl text-center text-bold text-blue-950 hover:shadow-md hover:cursor-pointer m-auto  "
              onClick={() => {
                setShowModal(true);
                setSelectedNote("");
              }}
            />
            <div className="space-y-4">{notesDisplay}</div>
          </div>
        ) : (
          <button
            className=" flex align-middle justify-center text-center m-auto p-14 w-26 bg-red-400 rounded-md text-white shadow-lg hover:shadow-xl hover:bg-red-600 "
            onClick={() => setShowModal(true)}
          >
            New Todo
          </button>
        )}
      </main>
    </>
  );
}

export default App;

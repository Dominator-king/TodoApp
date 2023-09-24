import React, { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function Modal({
  showModal,
  setShowModal,
  setNotes,
  selectedNote,
  notes,
}) {
  let key = nanoid();
  const [note, setNote] = useState({ title: "", description: "", id: key });
  const editedNote = notes.find((item) => item?.id == selectedNote);
  useEffect(() => {
    key = nanoid();
    editedNote
      ? setNote({
          title: editedNote.title,
          description: editedNote.description,
          id: key,
        })
      : setNote({ title: "", description: "", id: key });
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[calc(100%-8rem)] h-[calc(100%-12rem)] m-auto mt-0">
              {/*content*/}
              <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" w-full flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">What to Do?</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      &#10060;
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      editedNote
                        ? setNotes((prevNotes) => {
                            return prevNotes.map((singleNote) => {
                              if (singleNote.id == selectedNote) {
                                return {
                                  ...singleNote,
                                  title: note.title,
                                  description: note.description,
                                };
                              }
                              return singleNote;
                            });
                          })
                        : setNotes((notes) => [...notes, note]);
                      setShowModal(false);
                    }}
                    id="form"
                    className="flex flex-col items-center w-80"
                  >
                    <label>
                      Title <br />
                      <input
                        required
                        type="text"
                        className=" border  p-2 ml-auto w-80 "
                        onChange={(e) =>
                          setNote((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                        value={note.title}
                      />
                    </label>
                    <label className="mt-6">
                      Description <br />
                      <input
                        type="textarea"
                        className=" border w-80  p-2 "
                        onChange={(e) =>
                          setNote((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }))
                        }
                        value={note.description}
                      />
                    </label>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    form="form"
                  >
                    Add To List
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

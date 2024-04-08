import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid"

import ShowNotes from './ShowNotes';

const Note = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [notes, setNotes] = useState(() => {

    const localNoteValue = localStorage.getItem('NOTES');

    if (localNoteValue == null) return [];

    return JSON.parse(localNoteValue);

  });

  useEffect(() => {
    localStorage.setItem("NOTES", JSON.stringify(notes));
  }, [notes])

  function HandleSubmitNote(e) {
    e.preventDefault();

    let titleText = document.getElementById('titleInput').value;
    let noteText = document.getElementById('noteInput').value;

    if (titleText === '' || noteText === '') {
      alert('Enter Title & Content of the Note.')
      return;
    } else {

      setNotes(currentNotes => {
        return [
          ...currentNotes,
          {
            id: uuidv4(),
            title: newTitle,
            note: newContent
          }
        ]
      })

      setNewTitle('')
      setNewContent('')
    }
  }

  const handleDeletNote = (id) => {
    setNotes(currentNotes => {
      return currentNotes.filter(note => note.id !== id)
    });
  }

  function renderNotes() {
    return (
      <>
        {notes.length === 0 && <p className='px-10 text-xl text-center mt-20'>You currently have no notes...</p>}
        <div className='grid justify-items-center justify-center xl:grid-cols-3 lg:grid-cols-2 mx-[50px] mt-[50px] md:grid-cols-2 sm:grid-cols-1 sm:gap-6' >
          {notes.map(note => (
            <div key={note.id}>
              <ShowNotes id={note.id} title={note.title} note={note.note} handleDeletNote={() => handleDeletNote(note.id)} />
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className='flex items-center justify-center my-10'>
        <form onSubmit={e => HandleSubmitNote(e)} className='border p-8 rounded-md'>
          <div className='flex flex-col w-full'>
            <label htmlFor='titleInput'>Title:</label>
            <input id='titleInput' value={newTitle} className='mt-1.5 w-[300px] rounded-sm text-slate-900 px-2' type="text" onChange={e => setNewTitle(e.target.value)} />

            <label htmlFor='noteInput' className='mt-3'>Content:</label>
            <textarea id='noteInput' value={newContent} rows="4" cols="39" className='mt-1.5 w-[300px] rounded-sm text-slate-900 px-2' onChange={e => setNewContent(e.target.value)}></textarea>
          </div>
          <button className='mt-5 relative left-[118px] border px-2 py-1 rounded-md hover:bg-slate-200 hover:text-black'>Add Note</button>
        </form>
      </div>
      {renderNotes()}
    </>
  )
}

export default Note
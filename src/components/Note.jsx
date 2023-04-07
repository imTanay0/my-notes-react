import React, { useState } from 'react'
import ShowNotes from './ShowNotes';

const Note = () => {

  const [notes, setNotes] = useState([]);

  function renderNotes() {
    return (
      <div className='grid justify-items-center justify-center xl:grid-cols-3 lg:grid-cols-2 mx-[50px] mt-[50px] md:grid-cols-2 sm:grid-cols-1 sm:gap-6' >
        {notes.map((note, idx) => (
          <ShowNotes key={idx} index={idx} title={note.title} note={note.note} handleDeletNote={handleDeletNote} />
        ))}
      </div>
    );
  }


  function HandleSubmitNote(e) {
    e.preventDefault();

    const titleText = document.getElementById('titleInput').value;
    const noteText = document.getElementById('noteInput').value;

    if (titleText === '' || noteText === '') {
      alert('Enter Title & Content of the Note.')
      return;
    } else {
      setNotes([
        ...notes,
        {
          title: titleText,
          note: noteText,
        }
      ]);
    }
  }

  const handleDeletNote = (index) => {
    console.log(`Note with index ${index} is deleted`);

    // let newNotes = notes;

    const deletedNotes = notes.splice(index, 1);
    const newNotes = notes;
    console.log('Nw Note: ', newNotes);

    setNotes(newNotes);
  }

  return (
    <>
      <div className='flex items-center justify-center my-10'>
        <form className='border p-8 rounded-md'>
          <div className='flex flex-col w-full'>
            <label>Title: </label>
            <input id='titleInput' className='w-[300px] rounded-sm text-slate-900 px-2' type="text" />

            <label className='mt-3'>Note: </label>
            <textarea id='noteInput' rows="4" cols="39" className='w-[300px] rounded-sm text-slate-900 px-2'></textarea>
          </div>


          <button className='mt-5 relative left-[118px] border px-2 py-1 rounded-md hover:bg-slate-200 hover:text-black' onClick={(e) => HandleSubmitNote(e)}>Add Note</button>
        </form>
      </div>
      <h2>My Notes</h2>
      {renderNotes()}
    </>
  )
}

export default Note
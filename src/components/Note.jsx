import React, { useState } from 'react'
import ShowNotes from './ShowNotes';

const Note = () => {

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  function handleTitleChange(e) {
    e.preventDefault();

    setTitle(e.target.value);

    if(isSubmit) {
      e.target.value = "";
      setIsSubmit(false);
    }
  }

  function handleNoteChange(e) {
    e.preventDefault();

    setNote(e.target.value);

    if(isSubmit) {
      e.target.value = ""
      setIsSubmit(false);
    }
  }

  const renderNotes = () => {
    const notes = <>
      <ShowNotes
        title={title}
        note={note}
      />
    </>

    return notes;
  }

  const HandleClick = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  }


  return (
    <>
      <div className='flex items-center justify-center my-10'>
        <form className='border p-8 rounded-md'>
          <div className='flex flex-col w-full'>
            <label>Title: </label>
            <input className='w-[300px] rounded-sm text-slate-900 px-2' type="text" onChange={e => handleTitleChange(e)} />

            <label className='mt-3'>Note: </label>
            <textarea rows="4" cols="39" className='w-[300px] rounded-sm text-slate-900 px-2' onChange={e => handleNoteChange(e)}></textarea>
          </div>


          <button className='mt-5 relative left-[118px] border px-2 py-1 rounded-md hover:bg-slate-200 hover:text-black' onClick={HandleClick}>Submit</button>

        </form>
      </div>
      <div className='grid grid-rows-3 grid-flow-col gap-6 mx-[50px] mt-[50px]'>
        {isSubmit? renderNotes() : null}
      </div>
    </>
  )
}

export default Note
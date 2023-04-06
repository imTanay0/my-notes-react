import React from 'react'

const ShowNotes = ({ title, note }) => {

  if (title === "" && note === "") {
    return (
      <>
        <p className='text-center'>No Notes Available... Create a New Note</p>
      </>
    )
  }

  return (
    <div className='flex border flex-col items-center w-[350px] p-5 rounded-md'>
      <p className='text-xl mb-3'>{title}</p>
      <p>{note}</p>
    </div>
  )
}

export default ShowNotes
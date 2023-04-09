import React from 'react'

const ShowNotes = ({ key, id, title, note, handleDeletNote }) => {

  return (
    <>
      <div className='flex border flex-col items-center p-5 rounded-md mb-10 lg:w-[350px] md:w-[300px] w-[280px]'>
        <p className='text-xl mb-4'>{title}</p>
        <p>{note}</p>
        <div className='relative mt-10 mb-3 w-full h-[2px] bg-white'></div>
        <button className='border rounded-sm px-3 py-1 mt-3' onClick={() => handleDeletNote(id)}>Delete Note</button>
      </div>
    </>
  )
}

export default ShowNotes
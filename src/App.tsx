import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import type { Note } from './types'
import uuid from 'react-uuid'

function App() {
  const [notes, setNotes] = useState<Note[]>(
    JSON.parse(localStorage.getItem('notes') || '[]') || [],
  )
  const initialNoteId = notes.length > 0 ? notes[0].id : ''
  const [activeNote, setActiveNote] = useState(initialNoteId)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const handleAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'New Note',
      content: '',
      updatedAt: Date.now(),
    }
    setNotes([...notes, newNote])
  }

  const handleDeleteNote = (id: string) => {
    const filterNotes = notes.filter((note) => note.id !== id)
    setNotes(filterNotes)
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updateNote: Note) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updateNote.id) {
        return updateNote
      } else {
        return note
      }
    })
    setNotes(updatedNotesArray)
  }

  return (
    <div className="App">
      <Sidebar
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  )
}

export default App

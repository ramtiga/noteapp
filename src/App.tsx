import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import type { Note } from './types'
import uuid from 'react-uuid'

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [activeNote, setActiveNote] = useState('')

  const handleAddNote = () => {
    console.log('noteを追加しました！！！')

    const newNote = {
      id: uuid(),
      title: 'たいとる',
      content: 'ノートの内容です',
      updatedAt: Date.now(),
    }
    setNotes([...notes, newNote])
    console.log(notes)
  }

  const handleDeleteNote = (id: string) => {
    const filterNotes = notes.filter((note) => note.id !== id)
    setNotes(filterNotes)
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
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
      <Main activeNote={getActiveNote()} />
    </div>
  )
}

export default App

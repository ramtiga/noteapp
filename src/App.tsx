import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import type { Note } from './types'
import uuid from 'react-uuid'

function App() {
  const [notes, setNotes] = useState<Note[]>([])

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
  return (
    <div className="App">
      <Sidebar handleAddNote={handleAddNote} notes={notes} />
      <Main />
    </div>
  )
}

export default App

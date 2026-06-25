import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

type Note = {
  id: number
  title: string
  content: string
  updatedAt: number
}

function App() {
  const [notes, setNotes] = useState<Note[]>([])

  const handleAddNote = () => {
    console.log('noteを追加しました！！！')

    const newNote = {
      id: 1,
      title: 'たいとる',
      content: 'ノートの内容です',
      updatedAt: Date.now(),
    }
    setNotes([...notes, newNote])
    console.log(notes)
  }
  return (
    <div className="App">
      <Sidebar handleAddNote={handleAddNote} />
      <Main />
    </div>
  )
}

export default App

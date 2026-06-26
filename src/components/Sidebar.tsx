import type { Note } from '../types'
import './Sidebar.css'

type Props = {
  handleAddNote: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleDeleteNote: (id: string) => void
  notes: Note[]
  activeNote: string
  setActiveNote: (id: string) => void
}

const Sidebar = ({
  handleAddNote,
  handleDeleteNote,
  notes,
  activeNote,
  setActiveNote,
}: Props) => {
  const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt)

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={handleAddNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && 'active'}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => handleDeleteNote(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>
              最終更新日:{' '}
              {new Date(note.updatedAt).toLocaleDateString('ja-JP', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

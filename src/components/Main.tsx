import type { Note } from '../types'
import './Main.css'
import Markdown from 'react-markdown'

type Props = {
  activeNote: Note | undefined
  onUpdateNote: (note: Note) => void
}

const Main = ({ activeNote, onUpdateNote }: Props) => {
  if (!activeNote) {
    return <div className="no-active-note">ノートが選択されていません</div>
  }

  const handleChange = (key: string, value: string) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      updatedAt: Date.now(),
    })
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          value={activeNote.title}
          onChange={(e) => handleChange('title', e.target.value)}
        />
        <textarea
          id=""
          placeholder="ノート内容を記入"
          value={activeNote.content}
          onChange={(e) => handleChange('content', e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">
          <Markdown>{activeNote.content}</Markdown>
        </div>
      </div>
    </div>
  )
}

export default Main

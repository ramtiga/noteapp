import './Sidebar.css'

type Props = {
  handleAddNote: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Sidebar = ({ handleAddNote }: Props) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={handleAddNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>タイトル</strong>
            <button>削除</button>
          </div>
          <p>ノートの内容です。</p>
          <small>最終更新日: 2026/06/25</small>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

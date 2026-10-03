const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <span className="logo-icon">🚚</span>
        <h2>MY MOVES</h2>
      </div>

      <nav>
        <div className="nav-item active">
          <span>👤</span>
          <p>MY PROFILE</p>
        </div>

        <div className="nav-item">
          <span>🧮</span>
          <p>GET QUOTE</p>
        </div>

        <div className="nav-item">
          <span>◉</span>
          <p>LOGOUT</p>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
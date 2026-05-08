import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

function App() {
  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>Blue Ocean IELTS Academy</h1>
      <p>App successfully working.</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)

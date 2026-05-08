
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BookOpen, Mic, FileText, ClipboardCheck, LogOut, User, PlayCircle } from 'lucide-react'
import './style.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [page, setPage] = useState('dashboard')
  const [answer, setAnswer] = useState('')
  const [result, setResult] = useState('')

  const courses = [
    { title: 'IELTS Listening', icon: <PlayCircle />, progress: 80, lessons: ['Introduction', 'Section 1 Practice', 'Section 2 Practice', 'Map Labelling', 'Full Test'] },
    { title: 'IELTS Reading', icon: <BookOpen />, progress: 65, lessons: ['Skimming', 'Scanning', 'True/False/Not Given', 'Matching Headings', 'Full Test'] },
    { title: 'IELTS Writing', icon: <FileText />, progress: 55, lessons: ['Task 1', 'Task 2 Essay', 'Band 7 Vocabulary', 'Sample Answers', 'Correction Practice'] },
    { title: 'IELTS Speaking', icon: <Mic />, progress: 70, lessons: ['Part 1', 'Cue Card', 'Follow-up Questions', 'Fluency Practice', 'Mock Interview'] }
  ]

  if (!loggedIn) {
    return (
      <div className="login-wrap">
        <div className="hero">
          <p className="pill">Blue Ocean Overseas</p>
          <h1>Blue Ocean IELTS Academy</h1>
          <p>Students mate online IELTS preparation: lectures, PDF notes, mock tests, speaking practice ane progress tracking.</p>
          <div className="hero-grid">
            <span>AI Lectures</span><span>Mock Tests</span><span>PDF Notes</span>
          </div>
        </div>

        <div className="login-card">
          <h2>Student Login</h2>
          <p>Demo login mate koi pan email/password lakhine login karo.</p>
          <input placeholder="Email / Mobile Number" />
          <input placeholder="Password" type="password" />
          <button onClick={() => setLoggedIn(true)}>Login Now</button>
          <button className="outline">Create Student Account</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <header>
        <div>
          <h2>Blue Ocean IELTS Academy</h2>
          <p>Student Learning Dashboard</p>
        </div>
        <button className="logout" onClick={() => setLoggedIn(false)}><LogOut size={18}/> Logout</button>
      </header>

      <nav>
        <button onClick={() => setPage('dashboard')} className={page==='dashboard'?'active':''}>Dashboard</button>
        <button onClick={() => setPage('courses')} className={page==='courses'?'active':''}>Courses</button>
        <button onClick={() => setPage('mock')} className={page==='mock'?'active':''}>Mock Test</button>
        <button onClick={() => setPage('speaking')} className={page==='speaking'?'active':''}>Speaking</button>
        <button onClick={() => setPage('materials')} className={page==='materials'?'active':''}>PDF Notes</button>
        <button onClick={() => setPage('admin')} className={page==='admin'?'active':''}>Admin</button>
      </nav>

      <main>
        {page === 'dashboard' && (
          <>
            <section className="stats">
              <div><p>Overall Progress</p><h3>72%</h3></div>
              <div><p>Target Band</p><h3>7.0</h3></div>
              <div><p>Mock Tests</p><h3>12</h3></div>
              <div><p>Vocabulary</p><h3>350+</h3></div>
            </section>
            <section className="card">
              <h2>Today's Study Plan</h2>
              {['Listening Practice Test', 'Reading Passage 3', 'Writing Task 2 Essay', 'Speaking Cue Card Practice'].map(x => <p className="task" key={x}>✅ {x}</p>)}
            </section>
          </>
        )}

        {page === 'courses' && (
          <section className="course-grid">
            {courses.map(c => (
              <div className="card" key={c.title}>
                <h2>{c.icon} {c.title}</h2>
                <div className="bar"><span style={{width:c.progress+'%'}}></span></div>
                <p>{c.progress}% completed</p>
                {c.lessons.map(l => <p className="lesson" key={l}>{l}<button>Open</button></p>)}
              </div>
            ))}
          </section>
        )}

        {page === 'mock' && (
          <section className="card">
            <h2><ClipboardCheck/> IELTS Mock Test</h2>
            <p><b>Question:</b> Skimming technique IELTS Reading ma shu mate use thay che?</p>
            {['Grammar improve karva', 'Passage no general idea fast samajva', 'Speaking fluency mate', 'Essay write karva'].map(o => (
              <label className="option" key={o}><input type="radio" name="q" onChange={() => setAnswer(o)} /> {o}</label>
            ))}
            <button onClick={() => setResult(answer === 'Passage no general idea fast samajva' ? 'Correct Answer ✅' : 'Wrong Answer ❌ Correct: Passage no general idea fast samajva')}>Submit</button>
            {result && <p className="result">{result}</p>}
          </section>
        )}

        {page === 'speaking' && (
          <section className="card">
            <h2><Mic/> Speaking Cue Card Practice</h2>
            <h3>Describe a country you would like to visit.</h3>
            <p>You should say which country it is, why you want to visit it, what you will do there, and how you feel about that country.</p>
            <button>Start 2 Minute Timer</button>
          </section>
        )}

        {page === 'materials' && (
          <section className="course-grid">
            {['Grammar PDF', 'Vocabulary PDF', 'Cue Cards PDF', 'Writing Samples PDF', 'Reading Practice PDF', 'Listening Tips PDF'].map(p => (
              <div className="card" key={p}><h2>{p}</h2><p>Google Drive link add karo.</p><button>Download</button></div>
            ))}
          </section>
        )}

        {page === 'admin' && (
          <section className="card">
            <h2><User/> Admin Panel</h2>
            <p>Students, courses, PDFs, tests manage karva mate section.</p>
            <table>
              <thead><tr><th>Name</th><th>Email</th><th>Target</th><th>Progress</th></tr></thead>
              <tbody>
                <tr><td>Rahul Patel</td><td>rahul@gmail.com</td><td>7.0</td><td>68%</td></tr>
                <tr><td>Priya Shah</td><td>priya@gmail.com</td><td>6.5</td><td>74%</td></tr>
                <tr><td>Jay Mehta</td><td>jay@gmail.com</td><td>7.5</td><td>59%</td></tr>
              </tbody>
            </table>
          </section>
        )}
      </main>

      <footer>
        <b>Blue Ocean Overseas</b><br/>
        205, Amrakunj Business Centre, Chandkheda Ahmedabad 382470<br/>
        +91-8488888870
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)

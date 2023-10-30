import { useState } from 'react'
import Header from './components/Header'
import AddContacts from './components/AddContacts'
import Contacts from './components/Contacts'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  localStorage.setItem('dark', darkMode)

  return (
    <div className={`${darkMode ? 'dark-mode': ''}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <AddContacts />
      <Contacts />
    </div>
  )
}

export default App

import { useState } from 'react'
import Header from './components/Header'
import AddContacts from './components/AddContacts'
import Contacts from './components/Contacts'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  localStorage.setItem('dark', darkMode)

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <AddContacts />
      <Contacts />
    </>
  )
}

export default App

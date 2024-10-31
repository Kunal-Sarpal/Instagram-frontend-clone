
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import Message from './pages/Message'
import Notification from './pages/Notification'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import FullHome from './pages/FullHome'

const App = () => {
  return (
    <div className='bg-black flex w-full justify-center select-none'>
      <Routes>
        <Route path="/" element={<FullHome/>} />
        <Route path="/home" element={<FullHome/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/message" element={<Message />} />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import './App.css'
import MainPage from './pages/main/main'
import SessionPlayer from './pages/session-player/session-player'
import SessionOwner from './pages/session-owner/session-owner'
import Sharing from './pages/sharing/sharing'
import WaitingRoom from './pages/waiting-room/waiting-room'
import PlaySessionPlayer from './pages/play-session-player/play-session-player'
import PlaySessionOwner from './pages/play-session-owner/play-session-owner'
import ResultPlayer from './pages/result-player/result-player'
import ResultOwner from './pages/result-owner/result-owner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/session-player' element={<SessionPlayer/>}/>
      <Route path='/session-owner' element={<SessionOwner/>}/>
      <Route path='/sharing' element={<Sharing/>}/>
      <Route path='/waiting-room' element={<WaitingRoom/>}/>
      <Route path='/play-session-player' element={<PlaySessionPlayer/>}/>
      <Route path='/play-session-owner' element={<PlaySessionOwner/>}/>
      <Route path='/result-player' element={<ResultPlayer/>}/>
      <Route path='/result-owner' element={<ResultOwner/>}/>
      {/* <Route path="/" element={<HelloPage />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/game" element={<GamePage />} /> */}
    </Routes>
  )
}

export default App

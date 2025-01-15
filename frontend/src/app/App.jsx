import Chat from '../pages/chat/Chat';
import Dashboard from '../pages/dashboard/Dashboard';
import Directory from '../pages/directory/Directory';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import './App.css'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </>
  )
}

export default App

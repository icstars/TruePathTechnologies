import Chat from '../pages/chat/Chat';
import Dashboard from '../pages/dashboard/Dashboard';
import Directory from '../pages/directory/Directory';
import Home from '../pages/home/Home';
import Layout from '../pages/layout/Layout';
import Login from '../pages/login/Login';
import './App.css'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/directory" element={<Directory />} />
              <Route path="/chat" element={<Chat />} />
            </Route>
          </Routes>
      </div>
    </>
  )
}

export default App

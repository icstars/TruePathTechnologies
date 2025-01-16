import { Link } from 'react-router'

export default function Navbar() {
  return (
    <div>
        <p>Navbar</p>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/directory">Directory</Link>
        <Link to="/chat">AI Assistant</Link>
        <Link to="/Home">Home</Link>
        </div>
  )
}

import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Content should grow */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App

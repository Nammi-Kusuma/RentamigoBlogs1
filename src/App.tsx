import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import BlogDetail from './components/BlogDetail'


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar/>
        <main>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/blog/:id' element={<BlogDetail/>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
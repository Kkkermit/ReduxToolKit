import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Styles/index.css'
import Index from './Components/index'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Index/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
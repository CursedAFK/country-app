import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom'
import Layout from './components/Layout'
import Flag from './pages/Flag'
import Flags from './pages/Flags'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Flags />} />
          <Route path='country/details/:id' element={<Flag />} />
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Router>
  )
}

export default App

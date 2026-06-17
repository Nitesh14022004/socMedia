import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost.jsx'
import Feed from './pages/Feed.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
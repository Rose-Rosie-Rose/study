import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BannerCreatePage from './pages/Banner-create'
import BannerPage from './pages/Banner'
import HomePage from './pages/Home'
import SigninPage from './pages/Signin'
import SignupPage from './pages/Signup'
// 모든 컴포넌트의 최상위 부모

// context api
// BrowserRouter = 브라우저 히스토리 정보를 담고있는 context api다
// 박스를 감싸져있어야 박스의 정보에 접근이 가능하다.

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/banner" element={<BannerPage />}></Route>
          <Route path="/banner-create" element={<BannerCreatePage />}></Route>
          <Route path="/signin" element={<SigninPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

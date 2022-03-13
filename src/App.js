import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BannerCreatePage from './pages/Banner-create'
import BannerPage from './pages/Banner'
import HomePage from './pages/Home'
import SigninPage from './pages/Signin'
import SignupPage from './pages/Signup'
import GNB from './components/shared/GNB'
import { UserContextProvider } from './contexts/user-context'
import { PATHS } from './constants'
import MyInfoPage from './pages/MyInfo'
import PrivateRoute from './components/shared/PrivateRoute'
import ResetCSS from './components/shared/ResetCSS'

// 모든 컴포넌트의 최상위 부모

// context api
// BrowserRouter = 브라우저 히스토리 정보를 담고있는 context api다
// 박스를 감싸져있어야 박스의 정보에 접근이 가능하다.

const App = () => {
  return (
    <div>
      <ResetCSS />
      <UserContextProvider>
        <BrowserRouter>
          <GNB />
          <Routes>
            <Route path={PATHS.HOME} element={<HomePage />}></Route>
            <Route path="/banner" element={<BannerPage />}></Route>
            <Route
              path={PATHS.BANNER_CREATE}
              element={<BannerCreatePage />}
            ></Route>
            <Route path={PATHS.SIGN_IN} element={<SigninPage />}></Route>
            <Route path={PATHS.SIGN_UP} element={<SignupPage />}></Route>
            <Route
              path={PATHS.MY_INFO}
              element={
                <PrivateRoute>
                  <MyInfoPage />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  )
}

export default App

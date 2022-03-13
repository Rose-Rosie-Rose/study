import { Navigate } from 'react-router-dom'
import { useUserContext } from '../../contexts/user-context'
import { PATHS } from '../../constants'

const PrivateRoute = ({ children }) => {
  const { user } = useUserContext()
  // 1. 로그인 여부 체크

  if (user == null) {
    return <Navigate to={PATHS.SIGN_IN} />
  }

  return children
}

export default PrivateRoute

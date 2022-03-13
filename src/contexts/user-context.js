import { createContext, useState, useContext, useEffect } from 'react'

const Context = createContext()

// Provider (제공자 = 관심사를 담고있는 박스)
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // 새로고침 대응

    return JSON.parse(localStorage.getItem('USER') || 'null')
  })

  useEffect(() => {
    // user 가 업데이트 될 떄 유저의 값을 로컬스토리지에 저장

    if (user == null) {
      localStorage.removeItem('USER')
    } else {
      localStorage.setItem('USER', JSON.stringify(user))
    }
  }, [user])

  // value 에 전파되는 값은 언제 어디서든 접근이 가능하다.
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  )
}

// Consumer (제공을 받는 자)
// 사용처에서는 useUserContext 를 이용하여 값에 접근 할 수 있다.
export const useUserContext = () => {
  return useContext(Context)
}

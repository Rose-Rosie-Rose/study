import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    job: '',
    name: '',
  })

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async () => {
    try {
      // 1. 유효성 = 엉뚱한 값이 들어가면 안됨

      // 2. 요청을 보낸다
      const response = await fetch('http://localhost:7777/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })

      if (response.ok) {
        navigate('/signin')
      }
      // 3. 요청이 성공적으로 됐는지 판단 (response.ok, response.status === 200)

      // 4. 회원가입 성공후 로그인페이지로 이동
    } catch (e) {
      window.alert('회원가입에 실패했어요 잠시 후 다시 시도해주세요')
    }
  }

  return (
    <div>
      <h1>회원가입</h1>
      <input
        name="email"
        placeholder="이메일을 입력해주세요"
        value={formValues.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        value={formValues.password}
        onChange={handleInputChange}
      />
      <input
        name="job"
        placeholder="직업 입력해주세요"
        value={formValues.job}
        onChange={handleInputChange}
      />
      <input
        name="name"
        placeholder="이름을 입력해주세요"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>회원가입</button>
    </div>
  )
}

export default SignupPage

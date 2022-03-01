// 양방향 데이터 바인딩
import { useState } from 'react'

const Form = (props) => {
  const [fromValues, setFormValues] = useState({
    width: 0,
    height: 0,
    backgroundColor: '',
    text: '',
  })

  const handleInputChange = (e) => {
    setFormValues({
      ...fromValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleReset = () => {
    setFormValues({
      width: 0,
      height: 0,
      backgroundColor: '',
      text: '',
    })
  }

  const handleSubmit = () => {
    // 값에 대한 유효성체크
    // 추가되는 시점에 id 부여
    // 부모로부터 전달받은 함수에 추가되길 원하는 값 전달
    props.onAddBanner(fromValues)
  }

  return (
    <div>
      <input
        name="width"
        placeholder="넓이"
        onChange={handleInputChange}
        value={fromValues.width}
      />
      <input
        name="height"
        placeholder="높이"
        onChange={handleInputChange}
        value={fromValues.height}
      />
      <input
        name="backgroundColor"
        placeholder="배경색"
        onChange={handleInputChange}
        value={fromValues.backgroundColor}
      />
      <input
        name="text"
        placeholder="텍스트"
        onChange={handleInputChange}
        value={fromValues.text}
      />
      <button onClick={handleSubmit}>배너추가</button>
      <button onClick={handleReset}>리셋</button>
    </div>
  )
}

export default Form

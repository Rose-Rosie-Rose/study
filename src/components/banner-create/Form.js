// 양방향 데이터 바인딩
import { useState } from 'react'

const Form = (props) => {
  const [formValues, setFormValues] = useState({
    width: 0,
    height: 0,
    backgroundColor: '',
    text: '',
  })

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
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
    if (
      formValues.width === 0 ||
      formValues.height === 0 ||
      formValues.backgroundColor === '' ||
      formValues.text === ''
    ) {
      window.alert('값을 모두 채워주세요')
      return
    }

    // if (formValues.width === 0) {
    //   alert('넓이를 입력하세요')
    // } else if (formValues.height === 0) {
    //   alert('높이를 입력하세요')
    // } else if (formValues.backgroundColor === '') {
    //   alert('색상을 입력하세요')
    // } else if (formValues.text === '') {
    //   alert('텍스트를 입력하세요')
    // } else {
    //   // 부모로부터 전달받은 함수에 추가되길 원하는 값 전달
    //   props.onAddBanner(formValues)
    // }

    // 추가되는 시점에 id 부여
    props.onAddBanner({
      id: Date.now(),
      ...formValues,
    })
  }

  return (
    <div>
      <input
        name="width"
        placeholder="넓이"
        onChange={handleInputChange}
        value={formValues.width}
      />
      <input
        name="height"
        placeholder="높이"
        onChange={handleInputChange}
        value={formValues.height}
      />
      <input
        name="backgroundColor"
        placeholder="배경색"
        onChange={handleInputChange}
        value={formValues.backgroundColor}
      />
      <input
        name="text"
        placeholder="텍스트"
        onChange={handleInputChange}
        value={formValues.text}
      />
      <button onClick={handleSubmit}>배너추가</button>
      <button onClick={handleReset}>리셋</button>
    </div>
  )
}

export default Form

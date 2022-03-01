// 단방향 데이터 바인딩

import { useState } from 'react'

const BannerPage = () => {
  const [폼값, 폼값업데이트] = useState({
    width: 300,
    height: 100,
    label: '배너',
    backgroundColor: '#EFEFEF',
  })

  const handleInputChange = (e) => {
    // event = 현재 이벤트를 일으킨 대상에 대한 정보
    console.log(e.target.name)
    폼값업데이트({
      ...폼값,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      {/*박스는 폼값에 의존하여 스타일을 만든다*/}
      <div
        style={{
          width: 폼값.width + 'px',
          height: 폼값.height + 'px',
          backgroundColor: 폼값.backgroundColor,
        }}
      >
        {폼값.label}
      </div>
      <div>
        <input
          name="width"
          placeholder="넓이 값을 입력해주세요"
          onChange={handleInputChange}
        />{' '}
        <br />
        <input
          name="height"
          placeholder="높이 값을 입력해주세요"
          onChange={handleInputChange}
        />{' '}
        <br />
        <input
          name="label"
          placeholder="텍스트 값을 입력해주세요"
          onChange={handleInputChange}
        />{' '}
        <br />
        <input
          name="backgroundColor"
          placeholder="색상 값을 입력해주세요"
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export default BannerPage

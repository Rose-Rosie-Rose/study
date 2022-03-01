// 컴포넌트는 항상 맨 앞이 대문자여야한다.

// 색상, 넓이, 높이, 텍스트값이 필요함
// props = Banner 에서 필요로하는 약속된 값
// props(약속된 값)을 넘겨주면 약속된 형태로 그려줌
const Banner = (props) => {
  // 정해진 값을 받을 수 있도록한다.
  const { backgroundColor, width, height, text } = props

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor,
      }}
    >
      {text}
    </div>
  )
}

export default Banner

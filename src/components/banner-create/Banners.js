// 부모로부터 배너 리스트를 받아서 배너를 그린다.
// 받는다 = props

import Banner from './Banner'

const Banners = (props) => {
  const { banners } = props

  return (
    <div>
      {banners.map((banner) => {
        return (
          <Banner
            key={banner.id}
            text={banner.text}
            height={banner.height}
            width={banner.width}
            backgroundColor={banner.backgroundColor}
          />
        )
      })}
    </div>
  )
}

export default Banners

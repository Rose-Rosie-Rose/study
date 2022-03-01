// /banner-create 페이지

import { useState } from 'react'
import Form from '../components/banner-create/Form'
import Banners from '../components/banner-create/Banners'

const BannerCreatePage = () => {
  // 보통 state 값을 업데이트하는 함수 이름 앞에는
  // set + state 이름을 사용한다.
  const [banners, setBanners] = useState([])

  // 배너를 추가하고 싶다면 이 함수를 써
  // 실제 데이터 업데이트가 일어나는 함수
  const handelAddBanner = (banner) => {
    console.log('자식으로부터 받은 값', banner)
    setBanners([...banners, banner])
  }

  return (
    <div>
      {/* handle => prop로 넘어갈때는 on으로 바뀜*/}
      <Form onAddBanner={handelAddBanner} />
      <Banners banners={banners} />
    </div>
  )
}

export default BannerCreatePage

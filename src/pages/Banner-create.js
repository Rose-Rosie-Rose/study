// /banner-create 페이지
import { useEffect, useState } from 'react'

import Form from '../components/banner-create/Form'
import Banners from '../components/banner-create/Banners'

// useEffect 는 값의 변화를 감지하는 함수 (=사이드이팩트)
// 인터페이스: useEffect(callback, [감시대상들])

const BannerCreatePage = () => {
  // 보통 state 값을 업데이트하는 함수 이름 앞에는
  // set + state 이름을 사용한다.
  const [banners, setBanners] = useState(() => {
    // 지연 평가
    // string -> object
    // fallback -> 값이 없을때를 대비
    return JSON.parse(localStorage.getItem('BANNERS') || '[]')
  })

  useEffect(() => {
    // 2. banners의 값이 변하면 useEffect의 callback에 동작하고 여기서 변경된 값을 저장한다.
    // banners의 변화가 생기면 동작하는 함수
    // - 첫 진입시(첫 렌더링 후) 반드시 한 번 동작한다.
    // - 감시대상의 변화를 감지하여 동작한다.
    localStorage.setItem('BANNERS', JSON.stringify(banners))
  }, [banners])

  // 배너를 추가하고 싶다면 이 함수를 써
  // 실제 데이터 업데이트가 일어나는 함수
  const handelAddBanner = (banner) => {
    console.log('자식으로부터 받은 값', banner)

    const newBanners = [...banners, banner]

    setBanners(newBanners)

    // 브라우저 저장소에 저장하는 방법(로컬스토리지)
    // 1. 실제 값이 업데이트되는 곳에서 한다.
    // object -> stirng
    // localStorage.setItem('BANNERS', JSON.stringify(newBanners))
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

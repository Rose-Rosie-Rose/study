import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
// import BannerPage from './pages/Banner'
import BannerCreatePage from './pages/Banner-create'

ReactDOM.render(
  <React.StrictMode>
    <BannerCreatePage />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

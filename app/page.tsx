import React from 'react'
import Company from './pages/Company'
import Button from './components/Button'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Icon from './pages/Icon'
import Menu from './layouts/Menu'
import Ba12 from './components/Ba12'

export default function page() {
  return (
    <>
      Họ và tên: Ngô Hữu Nghĩa
      <Company></Company>
      <Button></Button>
      <Header></Header>
      Trang chủ
      <Footer></Footer>
      <Icon></Icon>
      <Menu></Menu>
      <Ba12></Ba12>
    </>
  )
}

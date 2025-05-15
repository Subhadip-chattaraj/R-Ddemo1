import React from 'react'
import Welcome from './Welcome'
import Grants from './Grants'
import RFMO from './RFMO'
import ContactPage from './Contact'
import FAQ from './FAQ'
import FeedbackForm from './FeedhbackFrom'

const MainPage = () => {
  return (
    <div>
      <Welcome />
      <Grants />
      <RFMO />
      <ContactPage />
      <FAQ />
      <FeedbackForm />
    </div>
  )
}

export default MainPage
